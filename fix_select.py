with open('src/app/pals/page.tsx', 'r') as f:
    content = f.read()

# Fix import
content = content.replace("import SelectField from '../../components/ui/SelectField';", "import { SelectField } from '../../components/ui/SelectField';")

# Fix options passing logic
# Instead of objects {value: x, label: x}, SelectField expects arrays [value, label]
old_type_select = "options={[{ value: '', label: 'All Types' }, ...allTypes.map(t => ({ value: t, label: t }))]}"
new_type_select = "options={[['', 'All Types'], ...allTypes.map(t => [t, t] as [string, string])]}"

old_work_select = "options={[{ value: '', label: 'All Work' }, ...allSuitabilities.map(w => ({ value: w, label: w.replace('_', ' ') }))]}"
new_work_select = "options={[['', 'All Work'], ...allSuitabilities.map(w => [w, w.replace('_', ' ')] as [string, string])]}"

content = content.replace(old_type_select, new_type_select)
content = content.replace(old_work_select, new_work_select)

with open('src/app/pals/page.tsx', 'w') as f:
    f.write(content)
