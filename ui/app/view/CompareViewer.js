Ext.define('TableApparatusApp.view.CompareViewer', {
    extend: 'Ext.window.Window',
    closable: false,
    height: 500,
    header:false,
    border: false,
    resizeHandles: '',
    width: 600,
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    requires: [
        'TableApparatusApp.view.VersionView'
    ],
    alias: 'widget.compareviewer',
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
            cls: 'tableapp',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            
                            xtype: 'combobox',
                            itemId: 'documentSelector',
                            forceSelection: true,
                            fieldLabel: 'Document',
                            store: 'DocumentListStore',
                            displayField: 'documentId',
                            valueVield: 'documentId',
                            editable: false,
                            grow: true,
                            labelWidth: 55
                            
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'combobox',
                            itemId: 'versionSelector1',
                            typeAhead: true,
                            forceSelection: true,
                            fieldLabel: 'Version 1',
                            store: 'VersionListStore',
                            displayField: 'longname',
                            valueField: 'version',
                            grow: true,
                            labelWidth: 55
                        },
                        {
                            xtype: 'combobox',
                            itemId: 'versionSelector2',
                            typeAhead: true,
                            forceSelection: true,
                            fieldLabel: 'Version 2',
                            store: 'VersionListStore',
                            displayField: 'longname',
                            valueField: 'version',
                            grow: true,
                            labelWidth: 55
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fullscreenIcon',
                            itemId: 'toggleFullscreenButton',
                            tooltip: 'Toggle fullscreen mode'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'versionview',
                    flex: 1,
                    /*dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'bottom',
                        items: [
                            
                            {
                                xtype:'tbfill'
                            },
                            {
                                text: 'Prev'
                            },
                            {
                                text: 'Next'
                            }
                        ]
                    }]*/
                    
                },
                {
                    xtype: 'versionview',
                   flex: 1
                }
            ]
        });

        me.callParent(arguments);
        // set the default value for the document so that the change event will be triggered
        this.down('#documentSelector').setValue('english/shakespeare/kinglear/act1/scene1');
    }
});