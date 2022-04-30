import React from 'react'
import Header from './Header'
import Home_Content from './Home_Content'
import { useState } from 'react';
export default function Book() {
  var a = window.location.href
	
	const [count, setCounter] = useState(a)
  console.log("this is book"+" "+ count)
  return (
    < div className='container header' style={{
      position: "absolute",
      marginTop:"-802px"
    }}>
      
      <h5> this is a book page </h5>

      Veda, (Sanskrit: “Knowledge”) a collection of poems or hymns composed in archaic Sanskrit by Indo-European-speaking peoples who lived in northwest India during the 2nd millennium BCE. No definite date can be ascribed to the composition of the Vedas, but the period of about 1500–1200 BCE is acceptable to most scholars. The hymns formed a liturgical body that in part grew up around the soma ritual and sacrifice and were recited or chanted during rituals. They praised a wide pantheon of gods, some of whom personified natural and cosmic phenomena, such as fire (Agni), the Sun (Surya and Savitri), dawn (Ushas, a goddess), storms (the Rudras), and rain (Indra), while others represented abstract qualities such as friendship (Mitra), moral authority (Varuna), kingship (Indra), and speech (Vach, a goddess).

The foremost collection, or Samhita, of such poems, from which the hotri (“reciter”) drew the material for his recitations, is the Rigveda (“Knowledge of the Verses”). Sacred formulas known as mantras were recited by the adhvaryu, the priest responsible for the sacrificial fire and for carrying out the ceremony. Those mantras and verses were drawn into the Samhita known as the Yajurveda (“Knowledge of the Sacrifice”). A third group of priests, headed by the udgatri (“chanter”), performed melodic recitations linked to verses that were drawn almost entirely from the Rigveda but were arranged as a separate Samhita, the Samaveda (“Knowledge of the Chants”). Those three Vedas—Rig, Yajur, and Sama—were known as the trayi-vidya (“threefold knowledge”). A fourth collection of hymns, magic spells, and incantations is known as the Atharvaveda (“Knowledge of the Fire Priest”), which includes various local traditions and remains partly outside the Vedic sacrifice.


A few centuries later, perhaps about 900 BCE, the Brahmanas were composed as glosses on the Vedas, containing many myths and explanations of rituals. The Brahmanas were followed by other texts, Aranyakas (“Forest Books”) and Upanishads, which took philosophical discussions in new directions, invoking a doctrine of monism and freedom (moksha, literally “release”) from the cycle of death and rebirth (samsara).

The entire corpus of Vedic literature—the Samhitas, the Brahmanas, the Aranyakas, and the Upanishads—is considered Shruti (“What Is Heard”), the product of divine revelation. The whole of the literature seems to have been preserved orally (although there may have been early manuscripts to assist memory). To this day, several of these works, notably the three oldest Vedas, are recited with subtleties of intonation and rhythm that have been handed down orally from the early days of Vedic religion in India.


Wendy Doniger


    </div>

  )
}
