import { GoogleOAuthController } from './controller/google.oauth.controller';
import { EmailAuthController } from './controller/email.auth.controller';
import { AuthHTTPController } from './controller/auth.http.controller';
import { AuthGRPCController } from './controller/auth.grpc.controller';
import { GoogleOAuthService } from './service/google.oauth.service';
import { SharedConfigProvider } from '@shared/server/sharedConfig';
import { EmailAuthService } from './service/email.auth.service';
import { AuthTokenService } from './service/auth.token.service';
import { UserService } from './service/user.service';
import { PrismaService } from '@libs/server/prisma';
import { TokenService } from '@libs/server/token';
import { AuthConfigProvider } from './config';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AuthHTTPController, AuthGRPCController, EmailAuthController, GoogleOAuthController],
  providers: [
    SharedConfigProvider,
    AuthConfigProvider,
    PrismaService,
    TokenService,
    AuthTokenService,
    UserService,
    EmailAuthService,
    GoogleOAuthService
  ]
})
class AuthModule {}

export { AuthModule };
