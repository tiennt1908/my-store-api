"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUseCase = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../user/repositories/user.repository");
const password_helper_1 = require("../../../domain/helpers/password.helper");
let RegisterUseCase = class RegisterUseCase {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(input) {
        try {
            const users = await this.userRepo.get({
                phoneNumber: input.phoneNumber,
            });
            if (users?.length > 0) {
                throw new Error('Số điện thoại đã được sử dụng');
            }
            const createUserQuery = await this.userRepo.create({
                fullName: input.fullName,
                phoneNumber: input.phoneNumber,
                password: await password_helper_1.PASSWORD_HELPER.hash(input.password),
                roleId: 1,
            });
            return {
                success: true,
                data: {
                    fullName: input.fullName,
                    phoneNumber: input.phoneNumber,
                    roleId: 1,
                },
            };
        }
        catch (err) {
            throw new common_1.HttpException({
                success: false,
                data: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.RegisterUseCase = RegisterUseCase;
exports.RegisterUseCase = RegisterUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], RegisterUseCase);
//# sourceMappingURL=register.usecase.js.map