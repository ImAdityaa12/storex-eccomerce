"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import userDetailsStore from "@/store/userDetail";
import { useStore } from "zustand";

export default function ProfilePage() {
  const { userDetails } = useStore(userDetailsStore);
  // Placeholder data
  const user = {
    name: "John Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    phoneNumber: "+1 (555) 123-4567",
    profileImage: "/placeholder.svg?height=128&width=128",
  };

  const orders = [
    { id: 1, date: "2023-05-01", total: "$120.00", status: "Delivered" },
    { id: 2, date: "2023-05-15", total: "$85.50", status: "Processing" },
    { id: 3, date: "2023-06-02", total: "$200.00", status: "Shipped" },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={userDetails.image} alt={user.name} />
          <AvatarFallback>
            {userDetails.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-3xl">{userDetails.name}</CardTitle>
          <p className="text-muted-foreground">@{userDetails.userName}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <dl className="mt-2 space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Username
                </dt>
                <dd className="text-sm">{userDetails.userName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Email
                </dt>
                <dd className="text-sm">{userDetails.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Phone Number
                </dt>
                <dd className="text-sm">{userDetails.phoneNumber}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Orders</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}