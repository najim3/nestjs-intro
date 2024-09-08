import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit') limit: any,
  ) {
    console.log(typeof id);
    console.log(id);

    return 'You sent a get request to users endpoints';
  }

  @Post()
  public createUsers(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(request);
    console.log(headers);
    console.log(ip);

    return 'You sent a post request to users endpoints';
  }
}
