/* eslint-disable prettier/prettier */
/* eslint-disable default-case */
module.exports = function(collection) {
  const tagSet = new Set();
  collection.getAll().forEach(function(item) {
    if ('tags' in item.data) {
      let tags = item.data.tags;

      // eslint-disable-next-line no-shadow
      tags = tags.filter(function(item) {
        switch (item) {
          // this list should match the `filter` list in tags.njk
          case 'all':
          case 'nav':
          case 'post':
          case 'posts':
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet];
};
