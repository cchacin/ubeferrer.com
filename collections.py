#!/usr/bin/env python3

import csv
import json
from operator import itemgetter
from functools import partial

def read_csv_and_generate_markdown():

    categories = set()  # Using a set to automatically de-duplicate
    # Categoria,Titulo,Precio Desde,Featured,Link,ASIN
    category_product_dict = {}
    with open('products.csv', 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            category = row.get("Categoria")
            product = {}
            product['title'] = row.get("Titulo")
            product['featured'] = bool(row.get("Featured"))
            product['price'] = float(row.get("Precio"))
            product['link'] = row.get("Link")
            product['asin'] = row.get("ASIN")
            
            if category not in category_product_dict:
                category_product_dict[category] = {}
            if 'products' not in category_product_dict[category]:
                category_product_dict[category]['products'] = []
            
            category_product_dict[category]['name'] = category
            category_product_dict[category]['featured'] = True
            category_product_dict[category]['products'].append(product)
            category_product_dict[category]['starts_from'] = min(list(map(itemgetter('price'), category_product_dict[category]['products'])))
    for category, products in category_product_dict.items():
        json_file_name = f"_data/collections/{category.replace(' ', '_').lower()}.json"
        json_content = {}
        json_content['name'] = category
        json_content['featured'] = category_product_dict[category]['featured']
        json_content['starts_from'] = category_product_dict[category]['starts_from']
        json_content['products'] = products
        with open(json_file_name, "w") as jsonfile:
            json.dump(category_product_dict[category], jsonfile, sort_keys=True, indent=4)
        markdown_file_name = f"{category.replace(' ', '_').lower()}.md"
        with open(markdown_file_name, 'w', encoding='utf-8') as mdfile:
            mdfile.write("---\n")
            mdfile.write("layout: product-grid-4-col\n")
            mdfile.write(f"title: \"{category}\"\n")
            mdfile.write(f"tag: {category.lower()}\n")
            mdfile.write(f"starts_from: {json_content['starts_from']}\n")
            mdfile.write("---\n\n")

# Example usage
read_csv_and_generate_markdown()