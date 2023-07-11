<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode=storedResButtonMode>Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode=addResButtonMode>Add
            Resource</base-button>
    </base-card>
    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>

</template>

<script>

import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    provide() {
        return {
            resources: this.storedResources,
            addResource : this.addResource,
            deleteResource : this.deleteResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        },
    },
    components: {
        StoredResources,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                { id: 1, title: "Munchies Honey Sweet Trail Mix", description: "Removal of Nonautologous Tissue Substitute from Right Hip Joint, Open Approach", link: "http://reuters.com/vitae.aspx?nulla=vivamus&mollis=tortor&molestie=duis&lorem=mattis&quisque=egestas&ut=metus&erat=aenean&curabitur=fermentum&gravida=donec&nisi=ut&at=mauris&nibh=eget&in=massa&hac=tempor&habitasse=convallis&platea=nulla&dictumst=neque&aliquam=libero&augue=convallis&quam=eget&sollicitudin=eleifend&vitae=luctus&consectetuer=ultricies&eget=eu&rutrum=nibh&at=quisque&lorem=id&integer=justo&tincidunt=sit&ante=amet&vel=sapien&ipsum=dignissim&praesent=vestibulum&blandit=vestibulum&lacinia=ante&erat=ipsum&vestibulum=primis&sed=in&magna=faucibus&at=orci&nunc=luctus&commodo=et&placerat=ultrices&praesent=posuere&blandit=cubilia&nam=curae&nulla=nulla&integer=dapibus&pede=dolor&justo=vel&lacinia=est&eget=donec&tincidunt=odio&eget=justo&tempus=sollicitudin&vel=ut&pede=suscipit&morbi=a&porttitor=feugiat&lorem=et&id=eros&ligula=vestibulum&suspendisse=ac&ornare=est&consequat=lacinia&lectus=nisi&in=venenatis&est=tristique&risus=fusce" },
                { id: 2, title: "Soup - Campbells Beef Noodle", description: "Removal of Nonautologous Tissue Substitute from Urethra, Open Approach", link: "http://nymag.com/magna.json?eleifend=morbi&pede=quis&libero=tortor&quis=id&orci=nulla&nullam=ultrices&molestie=aliquet&nibh=maecenas&in=leo&lectus=odio&pellentesque=condimentum&at=id&nulla=luctus&suspendisse=nec&potenti=molestie&cras=sed&in=justo&purus=pellentesque&eu=viverra&magna=pede&vulputate=ac&luctus=diam&cum=cras&sociis=pellentesque&natoque=volutpat&penatibus=dui&et=maecenas&magnis=tristique&dis=est&parturient=et&montes=tempus&nascetur=semper&ridiculus=est&mus=quam&vivamus=pharetra&vestibulum=magna&sagittis=ac&sapien=consequat&cum=metus&sociis=sapien" },
                { id: 3, title: "Squid - Tubes / Tenticles 10/20", description: "Removal of Drainage Device from Peritoneal Cavity, External Approach", link: "https://nasa.gov/dui/luctus/rutrum/nulla/tellus/in.html?condimentum=in&neque=quam&sapien=fringilla&placerat=rhoncus&ante=mauris&nulla=enim" },
                { id: 4, title: "Bread - French Stick", description: "Bypass Left Kidney Pelvis to Right Kidney Pelvis with Autologous Tissue Substitute, Open Approach", link: "http://loc.gov/ut.aspx?cursus=sapien&id=a&turpis=libero&integer=nam&aliquet=dui&massa=proin&id=leo&lobortis=odio&convallis=porttitor&tortor=id&risus=consequat&dapibus=in&augue=consequat&vel=ut&accumsan=nulla&tellus=sed&nisi=accumsan&eu=felis&orci=ut&mauris=at&lacinia=dolor&sapien=quis&quis=odio&libero=consequat&nullam=varius&sit=integer&amet=ac&turpis=leo&elementum=pellentesque&ligula=ultrices&vehicula=mattis&consequat=odio&morbi=donec&a=vitae" },
                { id: 5, title: "Wine - Taylors Reserve", description: "Drainage of Left Seminal Vesicle with Drainage Device, Percutaneous Approach", link: "https://mozilla.com/sollicitudin/vitae/consectetuer.jsp?in=est&hac=donec&habitasse=odio&platea=justo&dictumst=sollicitudin&maecenas=ut&ut=suscipit&massa=a&quis=feugiat&augue=et&luctus=eros&tincidunt=vestibulum&nulla=ac&mollis=est&molestie=lacinia&lorem=nisi&quisque=venenatis&ut=tristique&erat=fusce&curabitur=congue&gravida=diam&nisi=id&at=ornare&nibh=imperdiet&in=sapien&hac=urna&habitasse=pretium&platea=nisl&dictumst=ut&aliquam=volutpat&augue=sapien&quam=arcu&sollicitudin=sed&vitae=augue&consectetuer=aliquam&eget=erat&rutrum=volutpat&at=in&lorem=congue&integer=etiam&tincidunt=justo&ante=etiam&vel=pretium&ipsum=iaculis&praesent=justo&blandit=in&lacinia=hac&erat=habitasse&vestibulum=platea&sed=dictumst&magna=etiam&at=faucibus&nunc=cursus&commodo=urna&placerat=ut&praesent=tellus&blandit=nulla&nam=ut&nulla=erat&integer=id&pede=mauris&justo=vulputate&lacinia=elementum&eget=nullam&tincidunt=varius&eget=nulla&tempus=facilisi&vel=cras&pede=non&morbi=velit&porttitor=nec&lorem=nisi&id=vulputate&ligula=nonummy&suspendisse=maecenas&ornare=tincidunt&consequat=lacus&lectus=at&in=velit&est=vivamus&risus=vel&auctor=nulla&sed=eget" },
                { id: 6, title: "Soup - Campbells, Lentil", description: "Change Brace on Right Lower Arm", link: "http://google.co.jp/proin/eu/mi/nulla/ac.js?dapibus=vestibulum&augue=sit&vel=amet&accumsan=cursus&tellus=id&nisi=turpis&eu=integer&orci=aliquet&mauris=massa&lacinia=id&sapien=lobortis&quis=convallis&libero=tortor&nullam=risus&sit=dapibus&amet=augue&turpis=vel&elementum=accumsan&ligula=tellus&vehicula=nisi&consequat=eu&morbi=orci&a=mauris&ipsum=lacinia&integer=sapien&a=quis&nibh=libero&in=nullam&quis=sit&justo=amet&maecenas=turpis&rhoncus=elementum&aliquam=ligula&lacus=vehicula&morbi=consequat&quis=morbi&tortor=a&id=ipsum&nulla=integer&ultrices=a&aliquet=nibh&maecenas=in&leo=quis&odio=justo&condimentum=maecenas&id=rhoncus&luctus=aliquam&nec=lacus&molestie=morbi&sed=quis&justo=tortor&pellentesque=id&viverra=nulla&pede=ultrices&ac=aliquet&diam=maecenas&cras=leo&pellentesque=odio&volutpat=condimentum&dui=id&maecenas=luctus&tristique=nec&est=molestie&et=sed&tempus=justo&semper=pellentesque&est=viverra&quam=pede&pharetra=ac&magna=diam&ac=cras&consequat=pellentesque&metus=volutpat&sapien=dui&ut=maecenas&nunc=tristique&vestibulum=est&ante=et&ipsum=tempus&primis=semper&in=est&faucibus=quam&orci=pharetra&luctus=magna" },
                { id: 7, title: "Juice - Orange 1.89l", description: "Bypass Left Common Iliac Artery to Right Renal Artery with Nonautologous Tissue Substitute, Open Approach", link: "https://noaa.gov/ac/nibh/fusce/lacus/purus/aliquet.json?posuere=volutpat&cubilia=in&curae=congue&donec=etiam" },
                { id: 8, title: "Tea - Herbal - 6 Asst", description: "Division of Cervical Plexus, Percutaneous Approach", link: "https://geocities.jp/a/libero/nam/dui.aspx?habitasse=platea&platea=dictumst&dictumst=morbi&morbi=vestibulum&vestibulum=velit&velit=id&id=pretium&pretium=iaculis&iaculis=diam&diam=erat&erat=fermentum&fermentum=justo&justo=nec&nec=condimentum&condimentum=neque&neque=sapien&sapien=placerat&placerat=ante&ante=nulla&nulla=justo&justo=aliquam&aliquam=quis&quis=turpis&turpis=eget&eget=elit&elit=sodales&sodales=scelerisque&scelerisque=mauris&mauris=sit&sit=amet&amet=eros&eros=suspendisse&suspendisse=accumsan&accumsan=tortor&tortor=quis&quis=turpis&turpis=sed&sed=ante&ante=vivamus&vivamus=tortor&tortor=duis&duis=mattis&mattis=egestas&egestas=metus&metus=aenean&aenean=fermentum&fermentum=donec&donec=ut&ut=mauris&mauris=eget&eget=massa&massa=tempor&tempor=convallis&convallis=nulla&nulla=neque&neque=libero&libero=convallis&convallis=eget&eget=eleifend&eleifend=luctus&luctus=ultricies&ultricies=eu&eu=nibh&nibh=quisque&quisque=id&id=justo&justo=sit&sit=amet&amet=sapien&sapien=dignissim&dignissim=vestibulum&vestibulum=vestibulum&vestibulum=ante&ante=ipsum" },
                { id: 9, title: "Vinegar - Champagne", description: "Drainage of Upper Esophagus with Drainage Device, Open Approach", link: "http://4shared.com/ultrices/libero/non/mattis/pulvinar/nulla/pede.html?amet=donec&lobortis=posuere&sapien=metus&sapien=vitae&non=ipsum&mi=aliquam&integer=non&ac=mauris&neque=morbi&duis=non&bibendum=lectus&morbi=aliquam&non=sit&quam=amet&nec=diam&dui=in&luctus=magna&rutrum=bibendum&nulla=imperdiet" },
                { id: 10, title: "Pasta - Fettuccine, Dry", description: "Beam Radiation of Hypopharynx using Photons <1 MeV", link: "http://netvibes.com/quis/justo.json?sed=justo&ante=in&vivamus=blandit&tortor=ultrices&duis=enim&mattis=lorem&egestas=ipsum&metus=dolor&aenean=sit&fermentum=amet&donec=consectetuer&ut=adipiscing&mauris=elit&eget=proin&massa=interdum&tempor=mauris&convallis=non&nulla=ligula&neque=pellentesque&libero=ultrices&convallis=phasellus&eget=id&eleifend=sapien&luctus=in&ultricies=sapien&eu=iaculis&nibh=congue&quisque=vivamus&id=metus&justo=arcu&sit=adipiscing&amet=molestie&sapien=hendrerit&dignissim=at&vestibulum=vulputate&vestibulum=vitae&ante=nisl&ipsum=aenean&primis=lectus&in=pellentesque&faucibus=eget&orci=nunc&luctus=donec&et=quis&ultrices=orci&posuere=eget&cubilia=orci&curae=vehicula&nulla=condimentum&dapibus=curabitur&dolor=in&vel=libero&est=ut&donec=massa&odio=volutpat&justo=convallis&sollicitudin=morbi&ut=odio&suscipit=odio&a=elementum&feugiat=eu&et=interdum&eros=eu&vestibulum=tincidunt&ac=in&est=leo&lacinia=maecenas&nisi=pulvinar&venenatis=lobortis&tristique=est&fusce=phasellus&congue=sit&diam=amet&id=erat&ornare=nulla&imperdiet=tempus&sapien=vivamus&urna=in&pretium=felis&nisl=eu&ut=sapien&volutpat=cursus&sapien=vestibulum&arcu=proin&sed=eu&augue=mi&aliquam=nulla" }]

        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, description, url){
            const newResource = {
                id:new Date().toISOString(),
                title: title,
                description:description,
                link:url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources'
        },
        deleteResource(resId){
            const resIndex = this.storedResources.findIndex(res => res.id === resId)
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>
