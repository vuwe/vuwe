<template>
  <div>
    <CellTips>说明的列表项</CellTips>
    <Cell>
      <ListItem title="无说明"></ListItem>
      <ListItem title="有说明" desc="说明文字"></ListItem>
      <ListItem title="可滑动" desc="往左滑试试">
        <button>Set to top</button>
        <button>Delete</button>
      </ListItem>
    </Cell>

    <CellTips>链接的列表项</CellTips>
    <Cell>
      <ListItem title="带图片" link="list" img="https://imgly.net/img/2gj.jpg"></ListItem>
      <ListItem title="带图标" link="list" icon="fa fa-comment"></ListItem>
      <ListItem title="不带图标" link="list" desc="说明文字"></ListItem>
      <ListItem title="可滑动" link="list" desc="往左滑试试">
        <button>Set to top</button>
        <button>Delete</button>
      </ListItem>
    </Cell>
  </div>
</template>