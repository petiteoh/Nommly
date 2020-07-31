# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Cuisine.destroy_all
Course.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
RecipeIngredient.destroy_all

demoUser = User.create(email: "demo@demo.com", password: 11111111, display_name: "Demo User")

cuisine1 = Cuisine.create!(cuisine: "American")
cuisine2 = Cuisine.create(cuisine: "Malaysian")
cuisine3 = Cuisine.create(cuisine: "Indian")
cuisine4 = Cuisine.create(cuisine: "Mexican")
cuisine5 = Cuisine.create(cuisine: "Italian")

course1 = Course.create!(course: "Soup")
course2 = Course.create(course: "Appetizer")
course3 = Course.create(course: "Salad")
course4 = Course.create(course: "Main")
course5 = Course.create(course: "Dessert")

r1 = Recipe.create!(
    creator: "NOMMLY",
    title: "Pretzels",
    description: "30 minute soft pretzels",
    calories: 400,
    total_time: 30,
    image_url: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/12/30-Minute-Homemade-Soft-Pretzels.jpg",
    directions: "https://sallysbakingaddiction.com/30-minute-whole-wheat-pretzels/",
    cuisine_id: cuisine1.id,
    course_id: course2.id
    )
    
    r2 = Recipe.create(
    creator: "NOMMLY",
    title: "Pan Mee",
    description: "Pan Mee – Malaysian dish with hand-torn noodles in a rich anchovy broth and topped with ground pork, veggie and crispy anchovies.",
    calories: 378,
    total_time: 75,
    image_url: "https://rasamalaysia.com/wp-content/uploads/2013/11/pan_mee4.jpg",
    directions: "https://rasamalaysia.com/pan-mee-recipe/",
    cuisine_id: cuisine2.id,
    course_id: course4.id
)

r3 = Recipe.create(
    creator: "NOMMLY",
    title: "Panna Cotta",
    description: "A traditional, easy, and delicious Italian custard. I had a difficult time finding a good and easy recipe on the internet, so I made up my own recipe. It tastes just like the panna cotta served at Italian restaurants. Serve with warm hot fudge sauce and fresh raspberries on top. This keeps well for several days in the refrigerator.",
    calories: 418,
    total_time: 255,
    image_url: "https://assets.epicurious.com/photos/5761d0268accf290434553aa/master/pass/panna-cotta.jpg",
    directions: "https://www.allrecipes.com/recipe/72567/panna-cotta/",
    cuisine_id: cuisine5.id,
    course_id: course5.id
)

r4 = Recipe.create(
    creator: "NOMMLY",
    title: "Easy Churros Recipe",
    description: "Homemade Churros coated in cinnamon sugar are the ultimate treat! Watch the video tutorial and you will see just how easy it is to make this Churros recipe using pantry staples.",
    calories: 368,
    total_time: 35,
    image_url: "https://natashaskitchen.com/wp-content/uploads/2020/03/Churros-Recipe-5.jpg",
    directions: "https://natashaskitchen.com/churros-recipe/",
    cuisine_id: cuisine4.id,
    course_id: course5.id
    )
    
r5 = Recipe.create(
    creator: "NOMMLY",
    title: "Mulligatawny Soup",
    description: "This fragrant Indian Mulligatawny Soup recipe is spiced with curry and made from creamy red lentils, carrots, apples, and coconut milk. Make a double batch and freeze the leftovers!",
    calories: 287,
    total_time: 55,
    image_url: "https://thewanderlustkitchen.com/wp-content/uploads/2016/04/vegetarian-indian-mulligatawny-soup-3.jpg",
    directions: "https://thewanderlustkitchen.com/indian-mulligatawny-soup/",
    cuisine_id: cuisine3.id,
    course_id: course1.id
)

r6 = Recipe.create(
    creator: "NOMMLY",
    title: "Balsamic Bruschetta",
    description: "Simple appetizer - the balsamic vinegar gives it a little kick. Best if the mixture has 1 or 2 hours to blend flavors before serving.",
    calories: 194,
    total_time: 15,
    image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRUXGBoaGRgXGB8YHhkYHRoXGx0dGx0gHiggGh4lHRoXITEhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzAmICYrNTAvLjEuLy0yLS0vLy0uNTUrLy8tLTAtLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgIDBAAHAQj/xABFEAABAwIEAwYDBQUHAgYDAAABAgMRACEEEjFBBVFhBhMicYGRMqGxI0LB0fAUFVJi4QcWM1NykvGC0hckQ0RjopOywv/EABsBAAIDAQEBAAAAAAAAAAAAAAMEAQIFAAYH/8QAMxEAAgEDAwEGBAYCAwEAAAAAAQIAAxEhBBIxQRMiUWFx8IGhseEFFDJSkcEj8RVC0TP/2gAMAwEAAhEDEQA/APKQqAIq5lXPSjD3CkmSkdY/L8qHrSCYSPas5aiuLiLCxyJCLSNd614XCFTalJF535VgUYtWv9pOUBJN9RtUmSB4yTjYA1HpzqWGEza8e1cDFiB/Wpxl3vvUXNpBteVqSJg3OxFQeQItsdRULzNTAzWGg1FTOF5Aqve/UVNCZNrjma5TesTVibColgJYkiL1awkE+e9UNFJPXetWBAzX5GuK3lpQqblIkT8q+qdJ0tArZhOHOrH2bbi/9KCr6CijPZPGqUMuEeAjdBT9QKlVY8CVNhACAVJkDzqATHWnNrsJjynKnCrAO5UgfVVUuf2cY9AzqaSEpBKiXEaC/wDFVuzbwkCKrjINtJFcNLAcvWnrg3CUsMq71hlxxIzkuSYTIED7sgkctaI4HAYNYCyEZiYLacoAGs+VtTQt4vtjyaFrd5gPLrEHiXCXGENKX/6qM4jYTEHrEH/qrG2gAmvYneGDEoUFNkJjKPAM0cknaNQKWGuwiULzOOK7oEwgpKVnofleucheZV9IwYKuf6nn+QqMJSSRyBJ9hUsDh3M/hSTzt+or1Z3g+HQ3lZJQAAVZSRc8yq500rRgW2kZlD7VQ1Uu4QmYFwbmaorEk3wI3S/Dxt3Em/hb+55ljsC4k51trSkiM0eGfPSaFLUY6zrXsvEX1JTCO6U27IhCIzE2IJJN41tNqTcR2EcWf/L+JFpKiBlJFwRrY9N6ISOkDW0tjccfT1iey7Aj519STc1px/A3sKstvZTaQUkkHykA+hFZSHCmB8NQbiL9kRIrNiaqI5b1YhJSMqh51ICdADH0qTiDtK+76V1Szq5fKuqMTtxhoi9YsZhBJUnXcDfr+fvW1AgEZoB/RqOIaISFJNvbSkk3IbiJBrZEBKwoNuVSaQlJtet72FjMqdduXTyrM0QY9jTwa4vDg3EzugnxbTzonw7gT2JMNJKrSTokDqo2o3wLhiW3EKeQlcJBDZ8XiV8OYDeL5fKYpkx2EdeBCipCBctiEwPLb1qTxiVLW4iinssoGFuIEW8Er9JgCfeiuE7INQSrMFGyQo6+QTB9a3NMoZF1BRBlKROUHn1PyrLiuJKbSTm+0cFzyT+FV325ldxOIAxXC0heRSgg2kg5wATuJkkcpp37M9gMBiP/AHqnVDVCE90fZUqjqKSGlAkkmST+ppn7A8MW/i0ZcyUoOdSgbgDaepgepoFGu2/ba95cGxtPRsD/AGecOa/9uFnm4oq+RMfKjmE4Ph2v8NhpH+lCR9BW6uraAtGdonyK+11dXSZ1Jv8AabjyjDhCSZJCiP5UnfmJ+lOVKXb3gD2JQCwpCVAQcwJkTO1DqglCBGNIyrWUtwDEQKk5SZS9hs4PIquBrJgpImk0ccLK8wEKSdNDaxH1rfxpGLZytOKSlbacqEoBnKokxN9SbelDsV2dWMhdWMzn83imDINrRFz0NZhRWfPSauq027bVBF+nnDA7V5yFJUpMi4Soix5Gepovg+I94iMKpSykZlJUoSm6Qork6TBkbfLzXiXCnsPkJ0UCU7yBroaYf7PsUpOKQQQkKzJcUqIyEAmZtqE+9EanuyYasqOu9BZhHbivFMpQ3lzSAFKiRJET5SaFPgocbaazKUQUqFlJUq3wRfXYjcUQ4Z2gbX3wZwzbToaUpDrQF4EwYAANtL0J4VgHcQe8W53bKFSpycoTGuXmrkBzqDTDTtPWZQd+APmZqOHUw53bjvdoUohxKb5SAkpKhpNzccvZhTgnMi0oe7xxPdqTlMSkz0AMg7HnSB2gxyi53jaQlpS1hOaTmy5ZKryTflTVjO1LSG04Zs5koSnMRYFZvtynT8qt3FveUVqlUAoOc9Onu1pp4ilcRjghzLZAVciQJII02Gu1C8NwJeIzPMs520nKpDZTYgCPDINxHnBoZxLjTqlNgjOCSoJV4pIMeKbi0CK9D/sndUlDragkAkLHOTIIPOwHsahGVnCk4ldbRC6fcQN3lPMOKYBaFwttSZ0C0lJHuKrRhAgFQGhuOlfo95hKxC0hQ5KAI9jQDH9icG5MN92Tugx/9TI+VMNpj0MwgfGeL96j/LFdXp//AIZM/wCcr/aPzr5Qvyzy+4TyfiDpUrSCNI0qqZgTrzOgn8/pUnBsT5GqUGLcjPof6ge9Z5JbJmRNq0gz+vKKfeCdj8Cxg/297M99nnyq8Kc2gTlBuSqE3JFefA6ef4UYVxxasInDqPgQ7IHTxG/MZrj1omnrbCb+zC03tNeFWlCQoqAVqSNSok2HICflFaHuIBeVAOo29r8z0pRW8Savw2KUg5hqNKnt5F4YIIUQfhTr5/r6ig2NeLhUqNbDoKsf4mpaVJAPiVmJjeI9qhhpPhAsAfe1/wClVLbjaWQZleHw5JCQCSbAAbnlzr3rsjwJODw6UAeMgFw81xp5DQV5B2PeDWLS64MyGzc7AkQCfL4vSvb2eItLMJWlVpkEEGeRpvRKq3Y88RpKDAbyJrrI9xJpKsqnEgzETp58vWpYnHtNgqWtKQBJJO1ecdpu3aH1fs+FQDnEF1Qggb5RqLb9adeqqjmN0dLVrfoHHJ6CengzX2kbshxnuZYddUtsXbUseNI3SqBdM6H3p2bdCgCkgg6EVZHDDEHUpNTNmEnUXCADJgbzXKWAJNgNSa827VcTGKIzPBtmSG0XlSv4lp5akDYQarVqimLyaNI1DYRE7e8Qz4txxpWZOaxF4vby2ilZ7HKU53i3CVAWBzSg8r2je1NzqHWFOtlNllIVmghRF0DNyBIg9KHcPwWF77NiMoJgwbpO2gsrcnyFZ4qAtnkza1GqWjTTHAx8Js4RwwPtKxDykgATkSPGoTvsmbxrrNacK1hmnSrDBxNiAHSCbxpAtt7VlSzh0lX2qVBRj4iLTGg0EfSrOIYRDjYUznR3aTmSoW1EQq0zPoB78xbgRXRa7fX/AMuFPHl8OsNcO7PkPh5DmVsBXeJUCZkEWjaSbxUWMGlDKW0ACFBIuD4iYkmefl8qVOH9o3UwJMLEXMAgG/Wr+OKLrXdtrUpZyqCQYSDm8RNpJi0TqR1oqVV/SRYxrVVUpVLFr+nvzlvFOHpHilJWhagUpuDJBUR5EganShT+BDikFsQZuI25+YNX4NeJwqfGkZAZsR4b+cg0W7OIQcq8ryipajIykbz1nrVH3NgcyaLlVvSN1v8AxeMXCuF5ckokpAAOoidt6ZcO1+zvJXcAXIG43t5VmwrwgJzhKjoCbxrAv9OVbMVhjlsZPtSBDI2RkQDPvxfyjRh+MNONB1tWYEwANc38MbGgvFO0pQvLKUIsnMSJKjuLzlGkxSX2gwysDhGClxZzurUrKctikAaaG0ctaC4bi2EzBZU6hUAKTlCgqOpM+9aj132gNg2kaL8P7RO0554E9H/vC7/mtf7FflXUif3lwf8Alu+yK+V3bjxjX/HN+w/wImftKRa8frrUEPJCrk3tfl0q51DapzGSBcCJ95oWWVEwglQPMfSdbdKRWmDPF2hkzAO+g8/x2qtSFJAzEQdPO++lDcOpyQADO3SfPyo23g3HPEtYBFjAJjTfS/OuFGcBMSVelWgE+XL9bVZi8I21dThzE2SIki0GINvOpIbtOdHvf6XqlRCsuJFUwBOlUO4otyqdqtWuN596FYl5KxZSirNoByg6n8JqKSFjD0qbMcQxwvEOMlU+LOMwB+8kz+vWmXgz60leJbPdNtzIUqSoptCR95Kj4RNwQeVJmJwEoClOlSjJJv4BIyi5kmxt7UR4dxlJytOIW6gJymPjI/lJBgfWnDYY5mrT1LUbKOCePL3xNvaftOvFKGZ0ZQAcqAqEnlB1PWTrrQjgmMQcQnOSlI+8oxB2kREEx1qfF+FpSUuYZSlMLBMrAzIKTcZR8USII1vyq3FdnQpovtY0OLkJyqbKZVA8M51aCIkCeYqVUcma1TWKtO1NrLbi31MdHikLS8pccgNIj3Jn6UxdkO2DOQtqJkuHJFxBvc/dEz715m72Z4i0yHVd2CiIVni14hKh4jcSbW50NwnFzhgUlIK7gibDqedWBNNrxbtaepQ07Enp76Ce6cY4kl5lSM6RmsoJWJA2OYwIkCRG9IvFzhmQpQc71wROQSlNoEr52i1L/AePftChh3kJSjKopyg/FreTfe5nyqLb0ShISpaDCEokjNqDki8mDflVKt3IYwNNvyrFHXPNgcW9cwlj+NNDDtJ7tSlyCStCkpSn+FJVIJItItE84pM4zh1vvIhJZQojxKBCUpt4iYuLE2pucGLwzS1YhIAWUiXAl3LcgQlCvBJgkRFxpSs/w9xSXFF9sSowmTJ38KQCQNpUQKrYq242gL1NRV7q89ObQxwhjDFD6QO/Ucqe+Ph0JJSlHInrNZMHgHiruw6EpFgCombSMtzrItpesfBX+6OTN4jcECAVCbETrGh/Oi2IYUpSXCsE93nCkqulMK8JMiFReJmrk7sR6p+H2QLwYD4/2cxAIcSlOVUwlK5UnKUgykkESVTbrWRAew/2a0lBBmT1636U4cLxmGSc6i5MJCwSCpURmgxodBep9psTh32irDkiEn7NQ8XLNmzEWnpz2ojEEW6yh0RUh2BP0gXgGHU8+lCyS2nxkCRsIE9T+PSnLEYBLTZS34JnSdSL+9ec4LFrYWSTeE6HlNN/DO0SSn7Q369ahXUNbx6zQ0+mUpvp5vyIX7HcMQlWd5wrdSod3r4QPkdfl5058SfCU3kk0q8CcSCVkgxp5/oxV+M4lnzQZVBjxRA3kemu89KT1FjUIESeiq1DtGJs7YLwz6GMPnPfAZ0hB0SRvYi/I8qVnexZWJCkoIEAEWKptJmw18UGgzWOS6+pSFBLiFeEzAUkbA7EGYJ1FN/BX1FbbjrSylUqEAkqgTprl9KbD78MMx2mh09L/G3n8ecQb/4cY3/4f9x/7a6vRv73scl+x/Kuo/Z0vGJ/ntf+35feeJI4VkUpC0ZVpIBzCCDAO+liKg5gSkjIJN4Uo6wOmifrRXjeN7/E4hxoEJcXnSFQDcCx1HOh4LioKwEgbGRPQDakPTM8n6QUvCOmXFLKsxAIGx2AvVDeNXMJkKFiVGCIOg/RpsweVxtJH3k5VRz/ADoVxbhQLfeAXmFAcwYn1Ee9Eseskcwc2kJMkiTvM/M137Z4oHi8rVQ3wwkLUVhIiQkzKjtFtKv4dwpaikJCiVG0JmdLAb1XYt7kz0Oj/DFNnYE/Cw+P2nO48CCBlgzcyeke1XfucuBx9t0oCYK7DnNvrPyojgOFs+IOtZllWUFSsoQdPhteef0ra9gSMzDDSnFCZXISDzidY669aKthxGKyNTYiwVB/Mz8VWwtCUspCU5s19kkamblW+tCWlBt5DoSS1nUkZ7AwIIMaG403ow5h2UYUftEqevCR4A0m5m1lqnNE2pf4zx5D5Z7ptbbDYyNg38WqlrInMpSreV96lUvc9ZnKF2g9ScRhU2pMBSStJsEA3Te5Ta8jrtSzjuELaW6psFLeYJBmLwCZ3ET8+lFv3wW15XJCkgCTfaxEGYg68jWLi7LzwBGaSc2ZR+IGZIUT4hI635XrktfE0uzDntLdL28fSQXiylCEofdzQc8qMDklN9IrK2wVm0knUnf13MVPD4AkhMAnmCTY/Uem1FX8JkDYQSbyToARGnzqzCwJMeVkp5taDyhbN1AhREAzaN97H8qnwfDvF1akOd3IupOsdI6XrbxZ1LhvYi9j+FS4C26chbbSfM2mDc3te/nQg18rF0UVGNYZx9OmZdx/FILo7orDJCfEoqWUkWVqSTsY1oU6uCRmCoPxDQ9RTjjMMhsZlKScStSQlABASDElZVYyLAik3tJg1tuAhIQhXwhOnX16VXaCbHmMUdS1Ed69v7+PT++JQ6qdfevjWOcbUQoEg7kbxyjlvWnhiMpKjcx4QRIn8I1npRniSlPKVLaUnwg2uCNfM2iTsKlWVcGdW1BcjaIsYt9ZckCAcsG8aDztRbhmI7l1ClOJygZzIidsokXJ+k8qLYPswvEAmyQfvEQNNuYttWnEdmPCkLcQUpNwlMCevinTkKg16UXarqD3RkeHhLeGuYZ95awlIITLaRYEgCRBvcZiB0FAuM8KcTiFJRlUCZ8BkIJ+6rkdz50cX2ebELBAAI0BF+kCieBwiERlAA6aGgiqLWEjT79OSwMlwxvu0JT8RF786nxXHNpufiKSLDbe23n51Y8qNPXnHSlHEoIfzOpsb5Db0tU0qbE7ugllC1XsxyYS4Zg0JTnCEpClgBREjUCL6pmQSOR9CXGMU6lxS1FLhSSJToItIHKhyOKwUoSPDHwEyASZ8PKDWjHvKPgKCglM7HwkdLXvTvaAiNKlnHHp5fWCv3kefy/pXVZ+7OnyrqrcxjenlM7jeZwT4REnaw/QrnwFmyxPigawSk6R+NXcXbKXPDfz5H/ivmDhKipQCdAABOuthfSl6ORPnQg3h/EikqTAB1i/xJ5DrR5/CnEJS2zGVYK1zYJCYkn1isGPw6QoKOoknyHP0oQviSnC7CilJQcqRYQNvxotrXEZ03/0F/GauJOZnIUrMGxlEgiQNLHQcha1EeA4kd6ZWEBaSgqCcxTMfDyNtdqWGFzJknqaO4HDBtSHArOElJySQTNhEXIza33FC2m957upUSjRCeUbeD8HZwqk4jFOBQJUGw6dSZvB5i/SaxMdtjiH0iQ0VZwhJTmTACIEyDzMCNPYBxf9odJexF4OURokbBI2H5Xmk7i7gzJANxytG1MIOkydWna0md2ufpngT1fEud4pSSlt3vLE5EgJgGyV3VMg6GxOutBDhmm1nv2xnSg92hKsyQSSCroY2Mx61v8A7PHUuYcpLil4gTlRIjLAgKFjrJzCQJ51PjOICEOd60pLgEFUApSogkCdjF+tVsRzMpUei9nW4EVlsjEpAVZ1uwPQT4Tz6cqtbcKEhJkbc0wNwRoPPnXzCOJdWlSVgKKBm2uNJ6xA9BW3iWDKCqQVJAClmfC2FWJO9zlNus2FUCAko3wjSOqk0auQMiVNN5SFZRJ0Kbz6f05dKrcwq1nKClPVaoCd/Oq8MgryNsgpTmEE6ki8noPi9Pe/CMpUslas19CSnyNrfTWhhM84+Ub0+m7UFnvboCenmIBaBQtQVqDrMg9RzFFMLjiFAg3Gm/p0EVb2jaSlKMsC5JvOvWTQXvIuZgWnl0ojrnE2qNRFSxxaNWKX3+VwqAIyoM7C5B5kTmHpW7jWDcxGFRkSFFKgo+LkkyRM3M6W+VB+D4ErQF5pJulKRck28W8WmOvnT/hGwhptKsozAqJTqlCE5lKvuQAPNQ2mgOTvFuYpqyltoiTwLuHFJSVR/FPhggG196d8D2Zw4EpBWo6KUcwHkND6zQvAQ44t5LTXj+EWAA2jQTzJ5GinDOALUorbf7s7loSP+omEH51d6BfKmLPSWmO81j/fwk2miQoZ7AkFIAmxj0+lQxQAIUkqgRvPOfztyq3FYAslTzbrbsAlaRZSoAkiPDNlG0cqD8VxLywgNhIUpsrSSqxSCkGDuoZk2qBTCqVtmclZGcL/AFCPFn22iJUcxEiDJPUk6T1oazxIurOcAWsdzlFxOxI0NAcbg8Q2krchQVqUqkpAGhGoF/lGlQ4Y4FIXqcqZPQTE8yNdtuooaUM2jR0o7E2bPjzG3AYFxwh0num02zqNrcr+I7RFauNNMvZB3Adi/erkKEbACMqeh+etIp4sWoTK8qZKUqNhOsAyL3tRJntb9mpCQB/MSSRaNzb/AIp9XpoLcQZ0VUkOAD6Y+/vibn+zKFlxBVkWlIWhSATmTuPTn0rZhG8L3yc0lpIEKNzmiSDGxuY60FwnahtlaVoKiUiPFe1wQL8jWTBcUzqJSAkA5yBpr+Mx60Pd3gRIbSudzNjHM9K/fHDv8xHyrqSf3jiP4Ff7VflXU1vPiP4+8zPyD/u+cE4xSe9TlJk2vz2/L1rcMCUNd74YBJUVafP6daCsYVTqpFwm/rt+fpW5vAO4gjvVAtp0SLCeZHPzrN07WFus81AfE3FLEgQ2TbbN6bDpQhBSjxr+HYbk+VOnaNtKWgE7UgO4CVSDqd6KhBJDGFpzajENoKVoMyTmQUyE/nV3DuNBhwOBKXCmYCwYmNT5VqXwGEJWkG2s71pY4ZMQ2omL2t+utELbcAT0mlqVKqbTmYhxd0p7p0Q26c2ZQICQTPhjQcq2cc4ay2226yUIKklJSCVlzNYqJOiRcTbeKInC5kALaJIIlalkwBokDYDX2037h2CYUpxstrK7hICkj4RKibEZY3G1V3t0EvqKToN7YAi7w7DPoWgoSoLnw5bmekTThwvjCAhTTzKe8B++mLxoQRPodZqns3jF520NNpJRO8EpiNSaI8WYGICnco7xBIVAkkAkbfeBjWbK6UMVH6ThrUen/mXyBHPv4wI3gWcP3mKSJQSIbCvgPKNSnU6cxtQXH4xwnvlIJBVKhzHOOVHA6pCYLcZ0/eEwJBBGomQR0qzAMqWowoZ/i8d8w6frSqbySNwzLaPQmqDXc28PfhB2Lxrf2ZSpaBYmBCspEGAY1BOvOsP7bCzkkpnwlQgkbSAaNcSw2dQRiEZVgCP9O0GTbleBJ9CmD7PYVtIL0EwNyACRaToNQb86uSv6bTUDGjYsL38Ovv1gPDcPW+Q5HhNoieszWtXZdKApahKUpJJgxAEz50+YPhrSUjKLAAAjQ/naL0O7U41ttlaJusZOeov5W3pbeSbCJ7+1qWA5MU8BixYGABpG0cqL4jtGlAKXZUSy4hKk/GkOAA30iwMmTakxClZglIlRMAC8mYAEa3omeDqW2palKL1jAjLl0yk89L6bbzR0uJtV6NIkBuJfhOOd2ISFACyQVadSYEmZNTx/aF15KUqUUpSAMqSQkgbkbnU+tHOC8OabSMzaVEj4lAE6X8vKiWODcgJaQVWAOUT7xMVQOTiAarT332XPjAeBQUoT3w+yXYKSrUTf8TfkK3jFZVpTIW2gEoMXymPlb9RQPtNiFwjKu5PhQZMSFSQT4dgCdZIir8C4p5Ke9TlQhGQqBghRVmFvvXKumlGew/iZddrVlLWzfE247FyJ8/0aUVYlQcUoJI+IHLMRqQY2i9OGBSGDKiHEKSUk5fhncC/6NK2NKQLXk688tvpVKVibgx5XtdQMSniTffJSWvGu0pTNgenyrLhOIPYdQQ40kIPhUlacuYdVRfzrH+3KaXmQcvlaRyPOj2L7QYbENEONqzgCLgiYiRpE72p2wbmLVWcdxePmIAeXDpECJkAEmATpOtG+DcfXhlZ2QlKjqYJ+pobj2klll5IgkFtXmkkD1IisjaqC4I4jelIqU9tTJjt/ffFfwo/2K/7q6k/P511U73jD/lqH7BPQuDM5Wxa5ufXT5RWjHP5UgDwgm8HyvarF4oIIbT4lWsBp7VTxTADvktBRclIJjw3M23iLVxSy2HpPAUtBWqcDkXz4RX47iLBI2oTmGHdlSAojYm177U38Q7KFRJBLYGqnICU+ZmZ6AE9KFcR4Q44cikwr7qj4RAtO1ri9clMr+rmWbRVk6X9MyTvaLv0DK33ZQdlSDmCtot8J96qb4qUBQVMm49bz5RXYjgbuHbAbUt4hzMQ2g5U+EAGYmTHlA86lheymKeBWsIbQlXiJIEG2pMW9frV2freem/DnWlpwKv35lg7RKSELgKIJkHQjT3q/hXH0lzELSwVPPIyggZhkg94L6WAknWOlDUcKZzR3i3QAfgASPUm5HtRrBY7BspW2GlJUoZVLzfdiCAMvO8aHeqdrbMJq6fbALTXPX09J87ItvOyAAywlSTeVS5pvvlBk/wCnnWrjvF8OcU6lpCkGMqm2wACopErEWSIIHWsGHxKkNpwzCBnUc5WVAQrlB2KQnUjTrRLAY9WbxlsyYzFACpIgFMiIFtfxoi2v5RLUaLdgCwHTy+fMGrwKlt5DCEC6MzqSsH7wMxIIjS0xQttwtqSUElSSTc3SAYkxaDB9Ohpmd4rBOXu53JBJPqBf1pd4ijvH1LEDOLhAgactRVK5UjnMb0lA6XvEnaOh4zN+MxbbnxaESOY39K0YPEBbaU2jKQoj72s25xfpQfE4J1KQpPjAFwPiG8xv6e1asHiITrJMG4iCfnpaq033G8abVUCgKt1x/qbeBcUj/wAutZCSDlOmUgzHsKy9pMK5mRZSknQxNzHK/K51rOxgHM0qSlPi1JuCDuNQPajzvEUIZUuRKRdE/fOgHQ/IHpSjqyG4EK9lqiog5+sTltqaX4plO38M/Q1pbxuUgiZBNjytAnf2rFi8K8EJeWhYQ4fCsiAo9Pn7VlQuj7SJortI5v4xtwfGIukZiL5VXBG49t618D4k7iHnEIQG3UJJDbsgqk/CJi+U7x+IUcPxFKQEJcAWsi/IpMpCjsCYBozxjipTjS6q3eITmj+JMJO+spF+tGCG24zC1WqQVNqeNrzDxjDud0txYUlTS0phUgifP9XruHcRUBBIBAJSVaH+U/hTNheLN4iBi0xEZXIkkXEKSbKIB129zWThWCbWQdUiYB1odSoFS4gqtI1T3xYjgwnhmh+ylY+LU76+e1LrHCXF/akJ7q4BzC22msAyfPpTYoQwtI0ANqUeC8GcfdOVzIM6EkDVRWTtpAAJJ2tQNKe+1o0cIbngww52XRh0wvIrOlC5IJNwSBcwLzS7xPAISJygqMp0nY/MCnbtfjEqxCgCMqAlI0m2oHUfrWk3iiyVJhNkn3Kv6J+tOVf1WHSW0oLUwzdYAwuNhh5oJmVhaJEgHRU/9MX5iqEsuJAOXN/pMmm1jg7amO+KAPEUqUTFyfDAkHpblQ57hKy4lDKFKJIm9hJACjyFFJJF7TNbtqJZ0I84F79f8Kvaup7/ALmL/wA+uqlz4Sv/ACNfymlTZQgrcUQtQuBb9bVdwriTYSFOmATlzyDBAm++lBsTiFuH7QZUD4lGNN77npXziHZ7vErXh1ZlJMd3vA87knW1CVSTgYmhSFBUFIv8Rm3QR1e4hgQPjU8CPhTkAE6nc0MVxbBLcKG8KXVJTKvtFQALwbgH0rzRGDcUSAg+E+Kfu6a9LinBXDBhMG4EOJU65GZWkI1KR6A+9EGfARKvQ7M5qk346fzmMWB7TfZnuWQAtNk3JKRMiTNrzGtJ/wC9xiBCllXdkJQ2PEBygaAX+IySa7guNLd0k+hII2t1v84oc1wNDTynUrzJmQATYmZnnyj3oTBCtyfhMytsD3U7gD8T/wCw8xxBsJDdkK0IIyzB56RrRINshNgHYtzEnXprNr7daW3ce0oFLik8r3n5VJx1txsJR/iJnL3ci0aKtEVFJy2CLSBQdn3Dcp88/PEy4ooQ7uU5vGN4nxBOwtbzrZjuK/wqlKbJBMkJMgW6C1KTrzgVlXIM/et79KJss6d7maVqMw1B0IGoB2q7UyI4dfqNNYVLNCK2niRkuDHU35Cr2QW1wrNOigbGes3HlWfDcQXhiFsulSrRAI2iD9LURxWN79wJfKQtJyrcJHjTaAogTnTdJI1jpQ2pgiCXUajXtt5+gmdXFiD4RJHy9a+/tv2ZU4zBcMoXtF/EORJE9aL/ALwwqSrJBGUpACIvETeDE0AewClRAIn4VbRsI1H9ahVVOOZo0Pw3s2Duf5xD+MJ1EmIAVzSQdxafwNbeBMNr7xp9UNuIAGZNisHwwr7pBJg/8UFZbWEgOrUNkhXIWkDU6azAiq3cYElWQ/DEkGP0fyowI3Xla+suwoUu8fLp8YzdtuEpbwIQ38LQBHSNdzzUa84wbWYkn4U3V16eZ0p1Z4u4pgKVkN+7V3iQQuQMuuhvFulCGeGjKoGE5SJGnkSdLxUsbxqg1SnTZCc35iWtIS6VZRlzZssWiZiTttTE/wAYwrruZxtQGXw9FSDtrvVOPwHiUncbp0i16G4fD92snVQum0jrPpVt4YWPMUWkqmwHWW8X4gVDIiQgXTmF9vlTf2QxfeNzZKUmCVHKAdSJPp5zSg+5nJUQL7flWfOW/vKCSbpBN+vI1Rqauu2NMCBeemP8dbAcABPtHoZoCx2hUytCkISkoUpQ+EkyCJVrsSB5UsoxbWWEpUpYMkqNvJKZj3r6h0EykEDlrA6/rehJp+xyDL6YiqdrDHsRiPEsyiYkqJJ21vVDDPeOpAJ8SgDaTBIH0oYy4Z9a+cZK0oGRRBzAkg3geVxeKsoLNmN6kiknd8Iz8SZSpxGGaWFJTMxsu8gxOg//AGNH0dkMQgoWMkJgx3hSSOsA77V53wPGuIS4RmCohEfdUdDfS8GieGcxCwFvPKVpAUskXMXTy9KuDtJJnnqT1XvubHhHP9mxv+ThP/yq/wCyuoB3A5f/AF/rXVX8yPCW7H3Y/wDsXsAsufZgEqVa362pwwuEUiMsqXI8SzEGeVuQpQ7G8SDLqlOEJOWATaBv+FGeMdogq4JnkDHIg8tt6PTIU2Mpoab7SFHM08d4PisPnWAlbSlSspIuD/Kbg3tE87VoceaQ0hKAC4qCU2JIi4vofyNVYLEuPNjvr7xt0nmaF8SbDS+9gb5QLR5896pY82jg0a1G/wAuT4dDNXEeIHNK41mAAOmgsP6CguNx9wUxM+dDsdjytalE3JnlWZUwDmEzpe3ntfpQjT3NuMydTuTU3Iwp49I6cI7T4hIkoaUNLon8aIPBCvt3EpbUoAjuxlCQLSUga2Gnzpe7MqK1ZlrMDY6E9fKKL8cx+ZsJt0MAR7fq1GV9ozNpEpvZqYsDAfaPHIeV8KcoFp1N9ec1heWX0jMrRIRmJuAnSdzAPyqotFawACok6DU32NbGsAiH2SSHUpSrxGAVAypI2sCOszU5bMp+IUUemFHI4+/lK8fwJaEBYdBSIiZSVdUz+hUWXVFOUfDM+vPmaji3cQ4gytvIgjMmTnA0B0ggaWJq1n4EiNBJE7m/5WqmoForS1A0VFio7xM2YZ1KCDE9Tt5UTVxFN5vKrAC+WT7QIoBm1mrcK64lOfuxlOilGJ09NKXTdEAKute9Rr++kM8VwbykJeX4GZCEwRaQToYmYJtSm2+tt6AtKgFbmUKjnBgimjhvaXCkd3iMMSCbkKz+ux9jRHivZHhz7Lj+AxOVaEKWWVHNMAmIVC0k6SZFOIk06aLp/wBQPr94F4jxBTqG0Pqy3PhRGVKDvlBgkkDU1Thm1GEqcz85lRGu56Qb0FGHX3YeSc6EmFiLoPUcutHuCPoUkGDaZJ3009KtYEi8aX9yHi/zm3ifZ0+EIC231FMIWQEOJUYmTGUiDzFjoYlexLBC1MvoLbiTCgdQfy8jBtT3xjFsus4ULWrvGpCkiZKMus6RKU/7zQvtK+ziWlrWtKXmY7pYB+0Rb7NU3KkzY85vF66pTBFxFgW5IiqjCFUpSoEjY2J/M1FXB3FfFAH6ua1IaKgCRfZSY+d63NvvJ2CgLzAV6mPxpQuwOIYvuW0Bu8KUgSI311/qav7NYEvPhhbgbLlkKOhX91J6GI84ou49OqCE8xeOvlWF7AJVAQobRcyD0nzq61rjvwahkN0Np84tgHMI4pp5JSsQQP4hoFJO41v0I2rTgXErErTc/FexG1tqH8SZfWsFxxbhAyAqUVkJEkAEmYkkx1rdhMPCUQlZIWM0wE5dbbk+dqt3OhjZ1BdbvzJvuEGwhEFNtj5UU4c0SmY1EBRjfltWl3AodfW591RBCSYFgBYWjT50Yw4SSkE2CcoH3bb9fwpd2Uk2iHBJ8ZT/AHa/+FX+8/nXyiXcNfy/r0rqpvPv/Ui/v2Z5PixEHfSifBMIlX2qgDlsEzqrmeVfcJhwoKSvXkfP8KtKFsglsSANxM9TTC1ABaD0epFLTgWPMYmRlSKHcSUCIUJBEfWp8NxyXUSkgEapJuPLmOtD+LYrUHUG0bTHvTZYKs0qZ3m4i5i0eM/KaoUetbsYsqiLQI+s7mhmKZJEEwOm/wCdDAuZmarSVXqM9oXwvHUZEIAgiyjtpr61PEY/MIFz+FKQBFEeGYhSSFJMKSbGrPQW+6F0GqIHZWjt2U4ojCKUp1pS3rBCCIgG5Vm22HpQbi094taviUor6EkzrsNaLd2pagtxYKiEm9tLQegq5zhqVKIWcx3tYA6RfUUbsbgQhcbiT1GftF/hnG4StlSQoLgmReReZ18xW3B4Vx1eVEcyToBO81gc4d3b4bAK1GQkJtMxBHK01sxWGfb+BBBIylQ0iZgRbXfpSlXbfMxNVR7N9l7jpKON4pIltsDIkxn3VtJ6GhZdUoJSpSilOgkwPIaCi+C4cpZykE7xv7crVW5wgpcykEDkZ0jbpvUq6hZr6KgqUw3xmTDMk3TtrTDg+HnJ4gJO4vtGvKpYXhRSjNFiqEnS50G+9Hm0kDLt1E3H10pZ6l4y9YtgRVw+JVhHe8bAWCYUkmy0bpIi8jfajgThVKzYVRDagFwof4c6p1vF/ccqAcdESgQbza/oYMb+4oviMbhm8OnOgqeUiMw8GVyNTFlJPlP1pmluZL+EGKqq9s595mhzDp1JJMekXrmOHodISpYbEGJEybTNxrelx3jUqAFpPPQetbUcQQ44lqYzGDJsOvrVwx4jrLi4M247su8wCoOtlsmIBUCZ/lKYPvtQtxZTYzP0o92iaYZbS2gKUu181gIvI0k8qEowTziC414oMKG4I0gciI+dCdAxssSttp7z4y7DPJCRcz8oqS8GFeJBg8v1pQ/xfeTChtEW8qIYN4CDcdIke8/hQCjAym4HN5UgZTCgRff8DRZlAgVUXkHUEipJdQNEn3j5XrrGVLQhh0k6Cr3AUidIJ03NgR+udY2cTmgBJPzv7fqKL4Hhqlj7TTlRadJnMBUqqogf94Hn866mf9zI/hHtXUz+V84v+Z8oFa4I2rEPckrV5yST9K0cSAQ2UpSINrDXzPKiCBlW4s6ruUg3BHXraqcQnciRrzrM3n0h6a7Yi43Cfy/hHl1obiUERJn0j3pzxeEzSes0D4ngpiTp9eXlNSjgYmlp65Rs8RdXA1rKhkuKgTetj2GVm8Qrfg3EsnNlubco8jTSMLgRiqwc7VzeCl8KGW6JAklSfij6elWJw7SoSy0SYiRMnrA19aYMQ+jLoUggzNr1RwbENthQGZSzYZQZiTJt6fomjMcYMounp79+3ImdC1aH9aflW39tcEqJidTHp9BRfD9m33iChlyDESnIPdUUF4xh1k90gDMnNmBtlixnnFzS96u7kxotp9pwMczGXg8+FBclKfCqN50tqIo5w/GYiYJBA35ecikzCrUg+Ex8wfzoth+OuSkLgJBuUiCRGnLWr1lqMe7MHV6BqzbxxbEO4rHKbczhoQQPENM3ltt70PfxWZWeeXp+vxrHj3FKMLUYEqTcGx0mLfo1Uy7BvodagI4ADfKa+gpBaIRuY24YpcQDIhJ+GdFDeOXWpPvZU+IgR6zQ7st/irQSIUJE9DH4iruIKSoZ1WGlt7a35Cl2S7RKsvZMVgV5sOvWACcxMAQLQBbb85rdiOGB5TbZOXMtInkJvA3hOYx0rdw/AQmd6iUQ6hzTu8x+RrURSlOZhqbqlxMfbfs6hDiEMFRAAgrAkmYIBACSNNhFLb/AsQ0olTZEEeL7pmNDvrXomMxynGQ6LtpKUo2JUq5VfS4G1qnhMCpYzv6CCEDQHSVczp/SgNUvgcyw1vZcZMCcL4Qp1F9D/EdfIbij37F+zZXW1XAgoUbKHL5ki1EMKhBMKygASbxF9+X9Kx4p9ClhCSTAkkiBFxYbnrUDAvEq2oqVTdjDeG/ZsQAYSSZsReRqOsdK+vdmGFf+mKVeHd424pIbS42TJC4AO4N9CLifKjq+MDDgZQoG32ZVmSoKvKSTIi9xbppTNOqHW5EIlJmUFZNXZFnZPzqSOyrQ+7RvhPF2n7JlKt0nX+tE+7o4RYNi6mxi/huBoRomiLWFAogG6kG6sFEGTMXcV1bclfataReLmHwaco36i09aoxOGTm8P1t5RWLCcWUDB5URbfz3g+tedck8TWC2NzBjrA1HrQt7h4UZKZymQT1F+ulNBwidZ+dUOhIMRVCAsIrExQe4beyb+VDuI4ZSEzlugylKhMnlA6TTjjsLInT1MUOxK5BEeRrkYA36w4Y4tNHZji2GfTkewzScS2JMgHONiD9RU8T/aG02S2jDlKkm4ASmPbak3G8OVnDjZKFpMyPlVPEkLf8avC4lBlKUE5gNVToB0p9KwYY5lWope7cevH2h8/wBp+IWshLaUAaEkq+VvrQbiPGynvXQEKcfKkzl0FsygJMG41oNhMMtRJAJTYEgWHrRRng4Urw6ddfU1D1dpzI0pXsr25+kB8LS33iUuKKUSM3l+FNg4Bg3Ce7eIPKx94gisp7PDS3tUXuzgCZmANTefauFdTyIRyL3Q2gHEpCFqSFBQBIB0kbVIOAwIuOX40Ya4CiBJothsE2iIA8z+dWNQHiNDVqg8TMfZtKwrMbDQSNZ/CtzzXeqSE3ggqEQCRHyjrWgKM5UakRptvfamLhPDQkDnRKFEu24zJ1ur3teL3acLaaBbVkvewMiOotek5GPELzKUVqsN7Ha5516jx9oAJtOpP0/GkjjHA2mWe8CQFmIJ5k6D0n2o1VSWNjM9bqAwhvDO5cLg21jxKWVkRsJgVu4pxYqPdtJv/Lrfc7J8/kaSOFcVUtcOk5QALGITy9zrR3inHEoTkYaAi5IMcp8/6GlURjcHEqaFQtYCEMMnuxLhkzNtB+J8zUXHblZ9+gmhuH4okDMd4gSDJton8TXzENLesCdT62166irbL91eJanpmJO7A8ZceMIAtKlq52Sm/Lc89ani+Ih5tLeRQy6KkSk7QRBKdbGhbnCnUqkyQfX/AIo/wbs846AVDIn5/wBKOF/6zTD0kUESvhLRLsNrUANCZJn8K9N4cFZAHF51c4y/KhvC+CobiBR1tEUyiWmfqa/amfctfDX0rqIQTRIrI5q+1Z3FdXTp5IteUhQItOh2MWqDnGnY8Jiql3msTqIrBYTbUzeO0LoNyD5gVenjmYg6E7dI50DU3zrkj0/OhlBCAiNh4oFJFrG3n1rO4tJ1NuVC8OY2kR+iK0MpJIM26/qajs5wa01ryzA+V50odj0FPiTZXzH661a+0URlJ5yOtZ8TiZTkIg7n/nXaiKAJBJMhhuJLQlaUhJSsGRAi+4612H4lktlCvKxoa8Miom2m+smo5yDcwOZrmvJUCEn+JLIkJjlb8TX0OqIhRN/1eg68RvM+tTwuPAUAucv6+VVCmE6YhhTZEDW2tX4Zq4BIJi/TyrAMcmNDmO3L1o7wXCfeVrTVGgz+kSrVwmOsIcL4feSKZcOzAqjAtCirbda6qFFhMtmubmRPCG3USsSbxc/o0i9vMOhthQWJmyf9RBg/WvQkuFIilDtng+8ZUFG0pJPIBQJPtNUcYNpIM8yThAkEGLH10qxNrJEnfb3NS4x3aHMqFFYtpeTAGot7Vv4i1Cm2mkSQkZiP4jzPSlwT0E2A6AAmV4HDJCsxA9P1c098I4dKQVC5+XSgvZzgigc7uuw5U84JnpRqadTENTX3mwnzDcNHKiTWGAq5ls8qvSzRcRS8pAipBBNakMVelsConTK1hq0hAAqdRXXTpnz11fMtfKmRPFF7+ddia+11YJ4m0JgXVb2o8vxrq6ubiWWasP8ACmrD8XoK6urpMLNfAn/Sr6ChvENK6uqXlE5g7j3wny//AJobidB6/hXV1W6Sy/qmdO1W4f8AE18rqpCniFuFa058O2rq6tejxMat+qMWDom3XV1NGLSSqA9ov8NXka6uobcS45njZ+L/AKh9acuA6q8zXV1CHSEXiOGB1FMuDrq6iwZm9NaG9K6urpWSrq6urpM41A11dXSJGurq6unT/9k=",
    directions: "https://www.allrecipes.com/recipe/54165/balsamic-bruschetta/",
    cuisine_id: cuisine5.id,
    course_id: course2.id
)

r7 = Recipe.create(
    creator: "NOMMLY",
    title: "Ahi Poke Salad Recipe",
    description: "This poke salad is way better than anything you'll find on a restaurant menu.",
    calories: 202,
    total_time: 80,
    image_url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F659252.jpg&w=939&h=1248&c=sc&poi=face&q=85",
    directions: "https://www.allrecipes.com/recipe/109293/ahi-poke-salad/",
    cuisine_id: cuisine1.id,
    course_id: course3.id
)

r8 = Recipe.create(
    creator: "NOMMLY",
    title: "Bubur Cha Cha (Nyonya Coconut Milk Dessert)",
    description: "‘Bubur cha-cha’ is a coconut milk dessert which commonly contains sweet potatoes and taro. In Malaysia and Singapore, bubur cha-cha is usually served as a dessert or sometimes for supper. This is one of the more popular Nyonya/Peranakan desserts which is colourful yet delicious.",
    calories: 474,
    total_time: 60,
    image_url: "https://ucarecdn.com/a676c7be-23f0-440d-be89-6752aeb0695d/-/scale_crop/1280x720/center/-/quality/normal/-/format/webp/bubur-cha-cha-nyonya-coconut-milk-dessert.webp",
    directions: "https://www.nyonyacooking.com/recipes/bubur-cha-cha-nyonya-coconut-milk-dessert~rJ70DvivM9-X",
    cuisine_id: cuisine2.id,
    course_id: course5.id
)

r9 = Recipe.create(
    creator: "NOMMLY",
    title: "Nyonya Kuih Pie Tee",
    description: "Nyonya Kuih Pie Tee Recipe and Step-by-Step Guide.",
    calories: 18,
    total_time: 180,
    image_url: "https://rasamalaysia.com/wp-content/uploads/2008/05/nyonya_kuih_pie_tee.jpg",
    directions: "https://rasamalaysia.com/step-by-step-guide-to-making-nyonya/",
    cuisine_id: cuisine2.id,
    course_id: course2.id,
)

r10 = Recipe.create(
    creator: "NOMMLY",
    title: "Vegan Pesto Pasta",
    description: "Whether you’re looking to get more protein into your diet or not, this recipe is a must-try. Gluten-free pasta is tossed in a creamy, incredibly flavorful vegan PEA pesto (!!), along with sun-dried tomatoes and arugula. Delicious, nutritious, and ready in 30 minutes!",
    calories: 552,
    total_time: 30,
    image_url: "https://minimalistbaker.com/wp-content/uploads/2016/01/AMAZING-30-minute-Pea-PESTO-Pasta-with-Sun-Dried-Tomatoes-and-Arugula-vegan-glutenfree-pasta-healthy-dinner-recipe-minimalistbaker.jpg",
    directions: "https://minimalistbaker.com/pea-pesto-pasta-with-sun-dried-tomatoes-arugula-vegan-gf/",
    cuisine_id: cuisine5.id,
    course_id: course4.id
)

# pretzel recipe ingredients
i1 = Ingredient.create!(ingredient: "1 and 1/2 cups (360ml) warm water (lukewarm, no need to take temperature)")
i2 = Ingredient.create(ingredient: "1 packet active dry or instant yeast (2 and 1/4 teaspoons)")
i3 = Ingredient.create(ingredient: "1 teaspoon salt")
i4 = Ingredient.create(ingredient: "1 Tablespoon (8g) granulated sugar")
i5 = Ingredient.create(ingredient: "3 and 3/4 – 4 cups (460-500g) all-purpose flour or mix of whole wheat and all-purpose flours (spoon & leveled), plus more for work surface")
i6 = Ingredient.create(ingredient: "1 large egg, beaten")
i7 = Ingredient.create(ingredient: "coarse sea salt, for sprinkling")

# bruschetta recipe ingredients
i8 = Ingredient.create(ingredient: "2 cloves Garlic, raw")
i9 = Ingredient.create(ingredient: "⅓ cup Basil, fresh")

ri1 = RecipeIngredient.create!(recipe_id: r1.id, ingredient_id: i1.id)
ri2 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i2.id)
ri3 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i3.id)
ri4 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i4.id)
ri5 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i5.id)
ri6 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i6.id)
ri7 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i7.id)

ri8 = RecipeIngredient.create(recipe_id: r2.id, ingredient_id: i3.id)

ri9 = RecipeIngredient.create(recipe_id: r3.id, ingredient_id: i3.id)

ri10 = RecipeIngredient.create(recipe_id: r4.id, ingredient_id: i3.id)

ri11 = RecipeIngredient.create(recipe_id: r5.id, ingredient_id: i3.id)

ri12 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i3.id)
ri13 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i8.id)
ri14 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i9.id)

ri15 = RecipeIngredient.create(recipe_id: r7.id, ingredient_id: i3.id)

ri16 = RecipeIngredient.create(recipe_id: r8.id, ingredient_id: i3.id)

ri17 = RecipeIngredient.create(recipe_id: r9.id, ingredient_id: i3.id)

ri18 = RecipeIngredient.create(recipe_id: r10.id, ingredient_id: i3.id)
ri19 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i9.id)




