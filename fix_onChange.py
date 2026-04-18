with open('src/app/pals/page.tsx', 'r') as f:
    content = f.read()

# SelectField onChange passes the value directly, not an event
content = content.replace("onChange={e => setSelectedType(e.target.value)}", "onChange={val => setSelectedType(val)}")
content = content.replace("onChange={e => setSelectedWork(e.target.value)}", "onChange={val => setSelectedWork(val)}")

with open('src/app/pals/page.tsx', 'w') as f:
    f.write(content)
