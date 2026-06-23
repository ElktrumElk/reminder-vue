import { useRerender } from '@/lib/render-vue'

export const [isAddPanel, setAddPanel] = useRerender(false)
export const [isForepanel, setForePanel] = useRerender(false)
