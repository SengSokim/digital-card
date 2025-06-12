interface Employee {
    id: number
    name: string
    title: string
    company: string
    email: string
    phone: string
}
export const useEmployee = () => {
    const supabase = useSupabaseClient()
    
    const fetchEmployees = async () => {
        const { data, error } = await supabase.from('employees').select('*')
        if (error) {
            console.log(error)
        }
        return data as Employee[]
    }

    const fetchEmployee = async (id: string) => {
        const { data, error } = await supabase.from('employees').select('*').eq('id', id)
        if (error) {
            console.log(error)
        }
        return data
    }

    return {
        fetchEmployees,
        fetchEmployee
    }
}
  