import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    // injecting auth service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  //   find a user by id

  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
