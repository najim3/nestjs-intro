import { Controller } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    // injecting posts service
    private readonly postsService: PostsService,
  ) {}
}
