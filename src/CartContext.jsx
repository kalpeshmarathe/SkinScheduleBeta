import React from 'react'

const CartContext = React.createContext(null)

export function CartProvider({ children }) {
    const [items, setItems] = React.useState([])
    const [isOpen, setIsOpen] = React.useState(false)

    const addItem = (item) => {
        setItems((prev) => {
            const existingIndex = prev.findIndex((p) => p.id === item.id)
            if (existingIndex !== -1) {
                const updated = [...prev]
                updated[existingIndex] = { ...updated[existingIndex], qty: updated[existingIndex].qty + (item.qty || 1) }
                return updated
            }
            return [...prev, { ...item, qty: item.qty || 1 }]
        })
        setIsOpen(true)
    }

    const removeItem = (id) => {
        setItems((prev) => prev.filter((p) => p.id !== id))
    }

    const clear = () => setItems([])
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    const toggle = () => setIsOpen((v) => !v)

    const count = React.useMemo(() => items.reduce((sum, it) => sum + it.qty, 0), [items])
    const total = React.useMemo(() => items.reduce((sum, it) => sum + (it.price || 0) * it.qty, 0), [items])

    const value = React.useMemo(() => ({ items, addItem, removeItem, clear, count, total, isOpen, open, close, toggle }), [items, count, total, isOpen])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const ctx = React.useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used within CartProvider')
    return ctx
}


