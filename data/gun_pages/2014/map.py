import folium
import pandas as pd


# read csv
data = pd.read_csv('2014_data.csv')
print (data["long"])

# create map object
m = folium.Map(tiles="cartodb positron", location=[39.809072,-98.5599327], zoom_start=5)   


# global tooltip
tooltip = 'Click for more info'

# create marker from CSV
for index,row in data.iterrows():
    lat = row["lat"]
    lon = row["long"]
    address = row["address"]
    date = row["date"]
    killed = row["n_killed"]
    popup_text = f"On {date} {killed} people were murdered on \n{address}"
    popup = folium.Popup(popup_text, min_width=300, max_width=500)
    folium.Marker(
        [lat,lon],
        popup = popup_text,
        tooltip = tooltip, 
        icon = folium.Icon(icon_size=(1,1), shadow_size=(1,1), shadow= None, icon_color='black', prefix= 'fa', icon ='fa-circle')
    ).add_to(m)

# generate map
m.save('map.html')



# create marker
# folium.Marker([42.375140, -71.032450], 
#                 popup='<strong>Location One </strong>',
#                 tooltip = tooltip,
#                 icon = logoIcon
#                   ).add_to(m)



