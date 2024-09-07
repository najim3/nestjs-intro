import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(id);
    console.log(limit);

    return 'You sent a get request to users endpoints';
  }

  @Post()
  public createUsers(@Body('email') email: any) {
    console.log(email);

    return 'You sent a post request to users endpoints';
  }
}
