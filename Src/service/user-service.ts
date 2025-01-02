import { prismaClient } from "../application/database";
import { logger } from "../application/logging";
import { ResponseError } from "../error/response-error";
import {
    toUserResponse,
    RegisterUserRequest,
    UserResponse,
    LoginUserRequest,
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";

export class UserService {
    // Register user
    static async register(request: RegisterUserRequest): Promise<UserResponse> {
        // Validate request
        const registerRequest = Validation.validate(
            UserValidation.REGISTER,
            request
        );

        // Check if email already exists
        const emailExists = await prismaClient.user.findFirst({
            where: {
                email: registerRequest.email,
            },
        });

        if (emailExists) {
            throw new ResponseError(400, "Email already exists!");
        }

        // Encrypt password
        registerRequest.password = await bcrypt.hash(
            registerRequest.password,
            10
        );

        // Add user to the database
        const user = await prismaClient.user.create({
            data: {
                username: registerRequest.username,
                email: registerRequest.email,
                password: registerRequest.password,
                nama_depan: registerRequest.nama_depan,
                nama_belakang: registerRequest.nama_belakang,
                nomor_telp: registerRequest.nomor_telp,
                nicknamegame: registerRequest.nicknamegame,
                TeamID: registerRequest.TeamID,
            },
        });

        // Convert user to UserResponse and return it
        return toUserResponse(user);
    }

    // Login user
    static async login(request: LoginUserRequest): Promise<UserResponse> {
        // Validate login request
        const loginRequest = Validation.validate(UserValidation.LOGIN, request);

        const user = await prismaClient.user.findFirst({
            where: {
                email: loginRequest.email,
            },
        });

        if (!user) {
            throw new ResponseError(400, "Invalid email or password!");
        }

        const passwordIsValid = await bcrypt.compare(
            loginRequest.password,
            user.password
        );

        if (!passwordIsValid) {
            throw new ResponseError(400, "Invalid email or password!");
        }

        // Return user response
        return toUserResponse(user);
    }

    // Logout user (optional cleanup or session handling)
    static async logout(): Promise<string> {
        return "Logout Successful!";
    }
}
