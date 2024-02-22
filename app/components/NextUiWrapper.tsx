'use client'
import { NextUIProvider } from "@nextui-org/react"

const NextUiProviderWrapper = ({children}:{children: React.ReactNode}) => {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}

export default NextUiProviderWrapper