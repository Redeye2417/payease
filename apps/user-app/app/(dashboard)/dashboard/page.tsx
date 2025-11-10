import { getServerSession } from "next-auth";
import { OnRampTransactions } from "../../components/OnRampTransaction";
import { authOptions } from "../../lib/auth";
import { PrismaClient } from "@repo/db/client";
import { Session } from "inspector/promises";
const prisma = new PrismaClient()
async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map((t: any) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}
export default async function() {
    const session = await getServerSession(authOptions);
     const transactions = await getOnRampTransactions();
    return <div>
    <div className="p-6  min-h-screen">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, {session?.user?.name}!</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
          <p className="text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-800">$12,340</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
          <p className="text-gray-500">Transactions</p>
          <p className="text-2xl font-bold text-gray-800">1,235</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
          <p className="text-gray-500">Pending Payments</p>
          <p className="text-2xl font-bold text-gray-800">42</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
          <p className="text-gray-500">Refunds</p>
          <p className="text-2xl font-bold text-gray-800">$1,230</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg shadow p-4 h-64 mb-6 flex items-center justify-center">
        <p className="text-gray-400">[Chart goes here]</p>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow p-4">
       <OnRampTransactions transactions={transactions} />
    </div>
</div>
</div>
}
