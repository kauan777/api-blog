import { Tag } from '../entities/tag';

export abstract class ITagsRepository {
  abstract create(tag: Tag): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, description: string): Promise<void>;
}
