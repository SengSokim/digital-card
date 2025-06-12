<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
definePageMeta({
    layout: 'custom',
})
const { fetchEmployees } = useEmployee()
const employees = await fetchEmployees()
</script>
<template>
    <h6 class="scroll-m-20 text-xl font-semibold tracking-tight">Employee</h6>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead class="w-[100px]">
                    No
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Title</TableHead>
                <TableHead class="text-right">
                    Company
                </TableHead>
                <TableHead class="text-right">
                    Email
                </TableHead>
                <TableHead class="text-right">
                    Phone
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="(employee, index) in employees" :key="employee.id">
                <TableCell class="font-medium">
                    {{ index + 1 }}
                </TableCell>
                <TableCell>
                    {{ employee.name }}
                </TableCell>
                <TableCell>
                    {{ employee.title }}
                </TableCell>
                <TableCell class="text-right">
                    {{ employee.company }}
                </TableCell>
                <TableCell class="text-right">
                    {{ employee.email }}
                </TableCell>
                <TableCell class="text-right">
                    {{ employee.phone }}
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>