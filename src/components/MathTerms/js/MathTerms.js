import React from 'react'
import config from '../config.json'
import Ref from './Ref'

// function LinkRef(grandparent, glossary) {
//   if (grandparent.hasOwnProperty('props') && grandparent.props.hasOwnProperty('children') && typeof grandparent.props.children === 'object') {
//     var parent = grandparent.props.children
//     if (parent instanceof Array) {
//       parent.map((child) => {
//         if (typeof child !== 'string') {
//           if (child.type.name === 'Ref') {
//             var section_id = child.props.id
            
//             return (
//               <div style={{display:"inline"}}>
//                 {/* <Ref id={section_id} ref_number="1" context={glossary[section_id]} /> */}
//                 {React.cloneElement(child, {ref_number:"1", context:glossary[section_id]})}
//               </div>
//             );
//           }
//           LinkRef(child, glossary)
//         }
//       })
//     }
//   }
// }


const MathTerms = (props) => {
  var misc_count = 0
  var section_count = {}
  config.valid_terms.map((term) => (
    section_count[term] = 0
  ))
  var ref_count = {}
  ref_count[config.ref] = 0

  var glossary = {}


  function LinkRef(grandparent) {
    if (grandparent.hasOwnProperty('props') && grandparent.props.hasOwnProperty('children') && typeof grandparent.props.children === 'object') {
      var parent = grandparent.props.children
      if (parent instanceof Array) {
        parent.map((child) => {
          if (typeof child !== 'string') {
            if (child.type.name === 'Ref') {
              var section_id = child.props.id
              
              return (
                <div style={{display:"inline"}}>
                  {/* <Ref id={section_id} ref_number="1" context={glossary[section_id]} /> */}
                  <div>Hello</div>
                  {/* {React.cloneElement(child, {ref_number:"1", context:glossary[section_id]})} */}
                </div>
              );
            }
            LinkRef(child, glossary)
          }
        })
      }
    }
  }

  return (
    <div>
      {/*
        Must include Parent Component (MathTerms) whenever using MathTerms
      */}
      {
        (props.children).map((child) => {
          var section_name, section_id, section_children
          try { section_name = child.type.name } catch { section_name = "" } 
          try { section_id = child.props.id } catch { section_id = "" }
          try { section_children = child.props.children } catch { section_children = "" }

          
          // Add definition to glossary
          if (section_name in section_count) {
            section_count[section_name] += 1
            glossary[section_id] = section_children
            return (
              <div key={section_name+section_count[section_name]}>
                {React.cloneElement(child, {section_name:section_name, section_number:section_count[section_name]})}
              </div>
            )
          }


          LinkRef(child, glossary)

          // // Link Ref to glossary
          // if (section_name in ref_count) {
          //   ref_count[section_name] += 1
          //   return (
          //     <div key={section_name+ref_count[section_name]} style={{display:"inline"}}>
          //       {React.cloneElement(child, {ref_number:ref_count[section_name], context:glossary[section_id]})}
          //     </div>
          //   )
          // }
          
          return (
            <div key={section_name+(++misc_count)} style={{display:"inline"}}>{child}</div>
          )
        })
      }
    </div>
  )
}

export default MathTerms
