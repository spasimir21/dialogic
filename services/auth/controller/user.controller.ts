import { Body, Controller, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { handleNullInController } from '@libs/server/utils/controllerUtils';
import { IToken, Token, TokenGuard } from '@libs/server/token';
import { unwrapResultSafe } from '@libs/shared/utils/result';
import { UserService } from '../service/user.service';
import { UserInfoDto } from '../dto/UserInfo';
import { TokenData } from '../dto/TokenData';
import { UseZodGuard } from 'nestjs-zod';

@Controller('/user')
class UserController {
  constructor(private readonly userService: UserService) {}

  @UseZodGuard('body', UserInfoDto)
  @UseGuards(TokenGuard)
  @Patch('/info')
  async updateUserInfo(@Token() token: IToken<TokenData>, @Body() userInfo: UserInfoDto, @Res() res: any) {
    handleNullInController(
      unwrapResultSafe(
        await this.userService.updateUserInfo(token.data.userData.id, userInfo),
        () => 'OK',
        () => null
      ),
      "Couldn't update user info!",
      res
    );
  }
}

export { UserController };
