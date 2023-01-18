const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-20", "01-06"],
  food:["01-01","01-18","01-21"],
  water:["01-19"]
}

nlwSetup.addDay('18/01')
nlwSetup.addDay("19/01")
nlwSetup.addDay("20/01")
nlwSetup.addDay("21/01")
nlwSetup.addDay("21/01")

nlwSetup.setData(data)
nlwSetup.load()