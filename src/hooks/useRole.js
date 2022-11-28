import { useEffect, useState } from "react"

const useRole = email => {
    const [role, setRole] = useState('');
    const [isRoleLoading, setIsRoleLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role);
                    setIsRoleLoading(false);
                })
        }
    }, [email])
    return [role, isRoleLoading]
}

export default useRole;