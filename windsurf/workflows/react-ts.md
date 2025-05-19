---
description: แนวทางการเขียน React ที่ดีที่สุดด้วย TypeScript
---

# แนวทางการเขียน React ที่ดีที่สุด

## โครงสร้างโปรเจค
- จัดระเบียบคอมโพเนนต์ตาม feature หรือโมดูล
- แยกโลจิกธุรกิจออกจาก UI components
- ใช้ atomic design pattern สำหรับคอมโพเนนต์ที่นำกลับมาใช้ใหม่ได้

## TypeScript Best Practices
- กำหนด type ให้ชัดเจนสำหรับ props และ state
- หลีกเลี่ยงการใช้ `any` type
- ใช้ interface สำหรับ objects ที่มีโครงสร้างชัดเจน
- ใช้ type aliases สำหรับ union types และ complex types

## Performance Optimization
- ใช้ React.memo() สำหรับคอมโพเนนต์ที่มีการเรนเดอร์ซ้ำบ่อย
- ใช้ useMemo และ useCallback เพื่อป้องกันการสร้างฟังก์ชันและค่าใหม่โดยไม่จำเป็น
- แบ่ง code ด้วย dynamic imports และ React.lazy()

## State Management
- ใช้ Context API สำหรับ state ที่ใช้ร่วมกันในหลายคอมโพเนนต์
- พิจารณาใช้ Redux หรือ Zustand สำหรับแอปพลิเคชันขนาดใหญ่
- ใช้ local state สำหรับ UI state ที่ไม่จำเป็นต้องแชร์

## Testing
- เขียน unit tests สำหรับ utility functions
- ใช้ interface สำหรับ objects ที่มีโครงสร้างชัดเจน
- ใช้ type aliases สำหรับ union types และ complex types

## Performance Optimization
- ใช้ React.memo() สำหรับคอมโพเนนต์ที่มีการเรนเดอร์ซ้ำบ่อย
- ใช้ useMemo และ useCallback เพื่อป้องกันการสร้างฟังก์ชันและค่าใหม่โดยไม่จำเป็น
- แบ่ง code ด้วย dynamic imports และ React.lazy()

## State Management
- ใช้ Context API สำหรับ state ที่ใช้ร่วมกันในหลายคอมโพเนนต์