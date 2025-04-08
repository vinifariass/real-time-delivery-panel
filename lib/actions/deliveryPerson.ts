

export async function listDeliveryPeople(filters: { status?: string; group?: string }) {
  const { status, group } = filters;
  const filter: any = {};
  if (status) filter.status = status;
  if (group) filter.group = group;

  return await prisma.deliveryPerson.findMany({ where: filter });
}