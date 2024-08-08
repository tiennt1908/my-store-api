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
exports.AuthenticationUseCase = void 0;
const common_1 = require("@nestjs/common");
const password_helper_1 = require("../../../domain/helpers/password.helper");
const user_repository_1 = require("../../user/repositories/user.repository");
let AuthenticationUseCase = class AuthenticationUseCase {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(phoneNumber, password) {
        try {
            const users = await this.userRepo.get({
                phoneNumber: phoneNumber,
            });
            const user = users[0];
            if (!user) {
                throw Error('Incorrect number phone');
            }
            const check = await password_helper_1.PASSWORD_HELPER.compare(password, user?.password);
            if (!check) {
                throw Error('Incorrect password');
            }
            return user;
        }
        catch (err) {
            throw new common_1.HttpException({
                success: false,
                data: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AuthenticationUseCase = AuthenticationUseCase;
exports.AuthenticationUseCase = AuthenticationUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], AuthenticationUseCase);
//# sourceMappingURL=authentication.usecase.js.map