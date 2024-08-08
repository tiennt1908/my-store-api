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
exports.LoginUseCase = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../user/repositories/user.repository");
const password_helper_1 = require("../../../domain/helpers/password.helper");
const jwt_1 = require("@nestjs/jwt");
let LoginUseCase = class LoginUseCase {
    constructor(userRepo, jwtService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
    }
    async execute(input) {
        try {
            const users = await this.userRepo.get({
                phoneNumber: input.phoneNumber,
            });
            const user = users[0];
            if (!user) {
                throw Error('Số điện thoại này chưa được đăng ký');
            }
            const isExact = await password_helper_1.PASSWORD_HELPER.compare(input.password, user?.password);
            if (isExact) {
                return {
                    success: true,
                    data: {
                        accessToken: await this.jwtService.signAsync({
                            id: user?.id,
                            phoneNumber: user?.phoneNumber,
                            fullName: user?.fullName,
                        }),
                    },
                };
            }
            throw Error('Số điện thoại hoặc mật khẩu không chính xác');
        }
        catch (err) {
            throw new common_1.HttpException({
                success: false,
                data: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.LoginUseCase = LoginUseCase;
exports.LoginUseCase = LoginUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], LoginUseCase);
//# sourceMappingURL=login.usecase.js.map