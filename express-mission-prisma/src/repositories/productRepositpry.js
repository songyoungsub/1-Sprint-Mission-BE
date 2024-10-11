import prisma from "../config/prisma.js";

async function create(createData) {
  return await prisma.product.create({
    data: createData,
  });
}

async function getById(id) {
  return await prisma.product.findUniqueOrThrow({
    where: { id },
  });
}

async function getAllByFillter(fillter) {
  const { orderBy, skip, take, where } = fillter;
  return await prisma.product.findMany({
    orderBy,
    skip,
    take,
    where,
  });
}

async function countByFillter(fillter) {
  return await prisma.product.count({
    where: fillter,
  });
}

async function update(updateData) {
  const { where, data } = updateData;
  return await prisma.product.update({
    where,
    data,
  });
}

async function deleteById(id) {
  return await prisma.product.delete({
    where: { id },
  });
}

export default {
  create,
  getById,
  getAllByFillter,
  countByFillter,
  update,
  deleteById,
};
