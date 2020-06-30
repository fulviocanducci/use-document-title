import { useDocumentTitle } from './'
import { renderHook, act } from "@testing-library/react-hooks";

jest.useFakeTimers();

describe('useDocumentTitle Test Constructor', () => {
  it('Set Constructor', () => {
    const { result } = renderHook(() => useDocumentTitle("First Page"));
    act(()=>{
      expect(result.current[0]).toBe("First Page");
      expect(result.current[1]).toBeInstanceOf(Object);
    });    
  }); 
});

// describe('useDocumentTitle Test Method', () => {    
//   it('Set Methods', () => {
//     const { result } = renderHook(() => useDocumentTitle());
//     result.current[1]("First Page");
//     act(()=> {
//       jest.useFakeTimers();
//       expect(result.current[0]).toBe("First Page");
//       expect(result.current[1]).toBeInstanceOf(Object);   
//     });         
//   });
// });