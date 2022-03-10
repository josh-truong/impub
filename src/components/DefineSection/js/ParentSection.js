import React from 'react'

const ParentSection = (props) => {
  var misc_count = 0
  var section_count = {"Corollary":0, "Definition":0, "Example":0, "Lemma":0, "Notation":0,
              "Observation":0, "Proposition":0, "Remark":0, "Theorem":0}
  var ref_count = {"Ref": 0}
  var glossary = {}

  return (
    <div>
      {/*
        - Must include Parent Component (ParentSection) at the start of
        Paper
        - Note* Consider using scopes for variable definitions with this
        component
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
                {React.cloneElement(child, {section_number:section_count[section_name]})}
              </div>
            )
          }
          
          // Link Ref to glossary
          if (section_name in ref_count) {
            ref_count[section_name] += 1
            return (
              <div key={section_name+ref_count[section_name]} style={{display:"inline"}}>
                {React.cloneElement(child, {ref_number:ref_count[section_name], context:glossary[section_id]})}
              </div>
            )
          }
          
          return (
            <div key={section_name+(++misc_count)} style={{display:"inline"}}>{child}</div>
          )
        })
      }
    </div>
  )
}

export default ParentSection
