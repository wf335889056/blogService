const tagsModels = require('../models/tags');

const gets = async query => {
  let { offset, limit, ids } = query;
  let res = await tagsModels.findAll({ limit });
  return res
}

const getsByIds = async query => {
  let { ids } = query;
  let res = res = await tagsModels.findAll({ where: { id: ids }, attributes: ['id', 'title']})
  return res
}

const add = async query => {
  let res = await tagsModels.create(query);
  return res
}

const del = async query => {
  let res = await tagsModels.destroy({ where: { id: query }});
  return res
}

const update = async query => {
  let { id, ...params } = query;
  let res = await tagsModels.update(params, { where: { id }})
  return res
}

module.exports = {
  gets,
  add,
  del,
  update,
  getsByIds,
}