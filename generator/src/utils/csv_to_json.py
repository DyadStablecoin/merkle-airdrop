import pandas as pd

csv_file_path = '/Users/shafu/Desktop/SNAPSHOT.csv'
json_file_path = 'output.json'

# no headers
df = pd.read_csv(csv_file_path, header=None)
# df = pd.read_csv(csv_file_path)

# loop over the rows of the dataframe
json_data = []
for i in range(len(df)):
    # if i == 4: break
    d = df.iloc[i].to_dict()
    # print(d[0], ":", d[1])

    # print f string
    print(f"\"{d[0]}\": {d[1]},")
