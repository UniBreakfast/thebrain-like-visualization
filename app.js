import { relationMapData } from './data.js'
import { RelationMap } from './relation-map.js'
import { wrapper } from './wrapper.js'

const relationMap = new RelationMap(relationMapData)

relationMap.settleAt(wrapper)
relationMap.render()
relationMap.listen()

relationMap.addEventListener('hover', e => 
  relationMap.lightUpRelated(e.targetNode?.label))

// relationMap.onhover = e => relationMap.lightUpRelated(e.targetNode?.label)
