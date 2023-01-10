import { Post } from '../entities/post';

export abstract class IPostsRepository {
  abstract create(post: Post): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract list(): Promise<Post[]>;
  abstract listByTitle(): Promise<Post[]>;
  abstract findByTag(tagId: string): Promise<Post[]>;
}
