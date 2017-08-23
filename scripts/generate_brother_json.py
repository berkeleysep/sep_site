import csv
import json

with open('../templates/brothers.csv', 'rU') as csvfile:
    r = csv.reader(csvfile, delimiter=',', dialect=csv.excel_tab)
    # row in form [name,major,year,class,linkedin,img_url]
    data = {}
    data['brothers'] = []
    for row in r:
        if row[0] == 'name':
            continue
        data['brothers'].append({
            'name': row[0],
            'major': row[1],
            'year': row[2],
            'img_src': 'images/brother_imgs/' + row[5],
            'linkedin': row[4]
        })

with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)
