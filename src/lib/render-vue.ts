import { ref, computed, type ComputedRef, type Ref } from 'vue'

// export function useRerender(value: string | boolean | [] | unknown): [unknown, CallableFunction] {
//   const __init_value = ref(value)

//   const __updatedVale = computed(() => {
//     return __init_value.value
//   })

//   const __handle_value: CallableFunction = (value: unknown, cb: CallableFunction) => {
//     __init_value.value = value
//     cb?.(__init_value.value)
//   }

//   return [__updatedVale, __handle_value]
// }

export function useRerender<T = unknown>(
  initialValue: T,
): readonly [ComputedRef<T>, (newValue: T, cb?: (val: T) => void) => void] {
  const __init_value: Ref<T> = ref(initialValue) as Ref<T>

  const __updatedValue = computed<T>(() => {
    return __init_value.value
  })

  const __handle_value = (newValue: T, cb?: (val: T) => void): void => {
    __init_value.value = newValue
    cb?.(newValue)
  }

  return [__updatedValue, __handle_value] as const
}
