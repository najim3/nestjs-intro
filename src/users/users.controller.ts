import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(@Param() params: any) {
    console.log(params);
    return 'You sent a get request to users endpoints';
  }

  @Post()
  public createUsers() {
    return 'You sent a post request to users endpoints';
  }
}
