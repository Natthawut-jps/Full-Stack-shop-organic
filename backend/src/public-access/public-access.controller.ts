import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PublicAccessService } from './public-access.service';

@Controller('public')
export class PublicAccessController {
  constructor(private readonly publicAccessService: PublicAccessService) {}

  @Post('register/username')
  @HttpCode(200)
  registerWithUsername(@Body() body: any) {
    return this.publicAccessService.registerWithUsername(body);
  }

  @Post('register/google')
  @HttpCode(200)
  registerWithGoogle(@Body() body: any) {
    return this.publicAccessService.registerWithGoogle(body);
  }

  @Post('reset_password/find_user')
  @HttpCode(200)
  findResetUser(@Body('email') email: string) {
    return this.publicAccessService.findResetUser(email);
  }

  @Post('reset_password/send_email')
  @HttpCode(200)
  sendResetEmail(@Body('email') email: string) {
    return this.publicAccessService.sendResetEmail(email);
  }

  @Post('contact/add')
  @HttpCode(200)
  addContact(@Body() body: any) {
    return this.publicAccessService.addContact(body);
  }
}
