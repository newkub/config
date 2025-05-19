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