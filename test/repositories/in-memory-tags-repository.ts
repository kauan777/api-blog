import { Tag } from 'src/app/entities/tag';
import { ITagsRepository } from 'src/app/repositories/ITagRepository';

export class InMemoryTagsRepository implements ITagsRepository {
  public tags: Tag[] = [];

  async create(tag: Tag): Promise<void> {
    this.tags.push(tag);
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(id: string, description: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
