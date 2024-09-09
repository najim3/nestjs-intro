import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    return [
      {
        title: 'Title title',
        content: 'Test Content',
      },
      {
        title: 'Title title 2',
        content: 'Test Content 2',
      },
    ];
  }
}
