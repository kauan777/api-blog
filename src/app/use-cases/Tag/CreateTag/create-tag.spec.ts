import { InMemoryTagsRepository } from '@test/repositories/in-memory-tags-repository';
import { CreateTag } from './create-tag';

describe('Create Tag', () => {
  it('should be able to create a tag', async () => {
    const tagsRepository = new InMemoryTagsRepository();
    const createNotification = new CreateTag(tagsRepository);

    const { tag } = await createNotification.execute({
      description: 'React.js',
    });

    expect(tagsRepository.tags).toHaveLength(1);
    expect(tagsRepository.tags[0]).toEqual(tag);
    expect(tagsRepository.tags[0].description).toEqual('React.js');
  });
});
