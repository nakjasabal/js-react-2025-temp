import { create } from "zustand";

// Zustand 스토어 생성
const useCounterStore = create((set) => ({
  count: 0, // 상태 값
  // 액션 정의. 이때 상태를 변경하는 set() 함수 사용(예약어 이므로 이름 변경 불가)
  increment: () => set((state) => ({ 
      count: state.count + 1 
    })
  ), // 증가 함수
  decrement: () => set((state) => ({ 
      count: state.count - 1 
    })
  ), // 감소 함수
  reset: () => set({ 
    count: 0 
  }) // 초기화 함수
}));

export default useCounterStore;
