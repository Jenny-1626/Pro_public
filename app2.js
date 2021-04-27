new Vue({
    el: '#app',

    created: function(){
                this.getHouse()
            },
        
        

        data(){
            return {

                imagen: "assets/fondoimg.gif",
                imagen1: "assets/lupa.jpg",
                imagen2: "assets/correo.jpg",
                imagen3: "assets/lupa.jpg",
                titulo: "Attendance",
                titulo2: "Party Loyalty",
                titulo3: "Congressmen",
                titulo4: "About US",
                titulo5: "Background History of Government Transparency",
                parr1: "The Constitution specifies that a majority of members constitutes a quorum to do business in each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most cases, debates continue even if a majority is not present.",
                parr2: "The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating 'aye' or 'no' when his or her name is announced. The House reserves roll-call votes for the most formal matters, as a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device. In the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present) cast the tiebreaking vote.",
                parr3: "The major power of the House is to pass federal legislation that affects the entire country, although its bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law (unless both the House and Senate re-pass the legislation with a two-thirds majority in each chamber). The House has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached officials are subsequently tried in the Senate), and to elect the U.S. President in case there is no majority in the Electoral College.",
                parr4: "Each U.S. state is represented in the House in proportion to its population as measured in the census, but every state is entitled to at least one representative.",
                cont: "Openness, accountability, and honesty define government transparency. In a free society, transparency is government's obligation to share information with citizens. It is at the heart of how citizens hold their public officials accountable. Here at TGIF we believe that government should be transparent.",
                cont1: "Governments exist to serve the people. Information on how officials conduct the public business and spend taxpayer money must be readily available and easily understood. This transparency allows good and just governance.  Transparency promotes accountability and provides information for citizens about what their Government is doing.",
                cont2: "We also believe that government should be participatory. Public engagement enhances the Government's effectiveness and improves the quality of its decisions. Knowledge is widely dispersed in society, and public officials benefit from having access to that dispersed knowledge. We invite you to use our site to become actively engaged in American government.",
                cont3: "TGIF works to disclose information in forms that the public can readily find and use. We solicit public feedback to identify information of greatest use to the public.",
                cont4: "the West, the idea that government should be open to public scrutiny and susceptible to public opinion dates back at least to the time of the Enlightenment, when many philosophes made an attack on absolutist doctrine of state secrecy, a core part of their intellectual project. The passage of formal legislative instruments to this end can also be traced to this time with Sweden, for example, (which then included Finland as a Swedish-governed territory) enacting free press legislation as part of its constitution (Freedom of the Press Act, 1766). This approach, and that of the philosophes more broadly, is strongly related to recent historiography on the eighteenth-century public sphere.",
                cont5: "Influenced by Enlightenment thought, the revolutions in America (1776) and France (1789), freedom of the press enshrined provisions and requirements for public budgetary accounting and freedom of the press in constitutional articles. In the nineteenth century, attempts by Metternichean statesmen to row back on these measures were vigorously opposed by a number of eminent liberal politicians and writers, Bentham, Mill and Acton prominent among the latter.",
                cont6: "Open government is widely seen to be a key hallmark of contemporary democratic practice and is often linked to the passing of freedom of information legislation. Scandinavian countries claim to have adopted the first freedom of information legislation, dating the origins of its modern provisions to the eighteenth century and Finland continuing the presumption of openness after gaining independence in 1917, passing its Act on Publicity of Official Documents in 1951 (superseded by new legislation in 1999).",
                cont7: "The United States passed its Freedom of Information Act (FOIA) in 1966, FOIAs, Access to Information Acts (AIAs) or equivalent laws were passed in Denmark and Norway in 1970.",
                
                lista: [
                    {Party: 'Democrats', Cant: '241', Prom: '931'},
                    {Party: 'Republicans', Cant: '208', Prom: '908.2'},
                    {Party: 'Independents', Cant: '0', Prom: '0'},
                    {Party: 'Total', Cant: '449', Prom: '0'},
                ],
                
                listhouse: [],
                todalis: [],
                listcomp: [],
                listcomp2: [],
                orden: [],
                orden2: [],
                diezporciento: 0,
                diezporciento2: 0,
                primeros: [],
                ultimos: [],
                primeros2: [],
                ultimos2: [],
                



            }
},

methods:
        {
        getHouse() {

            
                const headers = { "X-API-Key": "HqLRnEvOnclNt3hrEn3x7kLbvHFW0wSQB72Nlldp" };
                this.$http.get("https://api.propublica.org/congress/v1/116/house/members.json", { headers })
                .then(function(response){
                    
                    if(response.status === 200) {
                    this.listHouse = response.data.results;
                
                    this.listhouse = response.data.results.map(p => {
                    console.log(p.members.length);

                    for(let x = 0; x < 451; x++){


                        this.todalis.push({
                            "name": p.members[x].first_name + " "+ p.members[x].last_name,
                            "url": p.members[x].url,
                            "party": p.members[x].party,
                            "state": p.members[x].state,
                            "years": p.members[x].seniority,
                            "votes": p.members[x].votes_with_party_pct,
                        })

                        this.listcomp.push({
                            "name": p.members[x].first_name + " "+ p.members[x].last_name,
                            "url": p.members[x].url,
                            "missed": p.members[x].missed_votes,
                            "missed2": p.members[x].missed_votes_pct,
                        })

                        this.listcomp2.push({
                            "name": p.members[x].first_name+ " "+ p.members[x].last_name,
                            "url": p.members[x].url,
                            "total": p.members[x].total_votes,
                            "porc": p.members[x].votes_with_party_pct,

                    })
                    
                    
                };

                
                    this.orden = this.listcomp.sort(function(a,b){
                        var x = (a.missed - b.missed);
                        return x;
                    
                        });

                    console.log(this.orden[0].name);

                    this.diezporciento = this.orden.length*0.1
                    console.log(this.diezporciento);

                    this.primeros = this.orden.slice(0,this.diezporciento)
                    console.log(this.primeros[0]);     
                    
                    this.ultimos = this.orden.slice(this.orden.length -45)
                    console.log(this.ultimos[0]);  
            
                    
                    this.orden2 = this.listcomp2.sort(function(a,b){
                        var y = (a.total - b.total);
                        return y;

                        });
                    
                    this.diezporciento2 = this.orden2.length*0.1
                    console.log(this.diezporciento2);

                    
                    this.primeros2 = this.orden2.slice(0,this.diezporciento2)
                    console.log(this.primeros2[0]);   

                    this.ultimos2 = this.orden2.slice(this.orden2.length -45)
                    console.log(this.ultimos2[0]); 

                 
                });
                            
            }
        

        }).catch(error => {
            console.log(error)
    });
}
}
});

