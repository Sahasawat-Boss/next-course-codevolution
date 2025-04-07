# Note

## 🔁 PUT = Replace the Whole Resource
📌 Summary:
Replaces the entire object

You must send all fields, not just the ones you want to change

If a field is missing, it gets removed or reset

------
## ✂️ PATCH = Update Part of the Resource
📌 Summary:
Only updates the fields you send

Keeps all other fields unchanged

More efficient for partial updates

---

# 📊 PUT vs PATCH – Quick Comparison

| Feature                  | PUT                     | PATCH               |
| ------------------------ | ----------------------- | ------------------- |
| Replace all?             | ✅ Yes                   | ❌ No (partial only) |
| Requires full object?    | ✅ Yes                   | ❌ No                |
| Safer for partial edits? | ❌ Not ideal             | ✅ Best for this     |
| Used for...              | Full record replacement | Minor updates       |
