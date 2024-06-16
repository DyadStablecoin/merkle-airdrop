import pandas as pd

df = pd.read_csv('merged.csv')

# iterate over each row
for index, row in df.iterrows():
    print(f"\"{row['address']}\": {int(row['sum'])},")
