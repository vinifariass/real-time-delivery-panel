import { listDeliveryPeople } from "@/lib/actions/deliveryPerson";

export default async function handler(req: any, res: any) {
    const { status, group } = req.query;
    const data = await listDeliveryPeople({ status: status as string, group: group as string });
    res.json(data);
}
